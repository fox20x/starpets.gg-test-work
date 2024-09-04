<template>
  <main class="main">
    <div class="block-main">
      <div class="container block-main__container">
        <div class="block-main__wrapper">
          <div class="convert">
            <div class="convert__row">
              <Input
                class="input convert__input"
                :key="firstAmount"
                :value="firstAmount"
                @update="firstAmountInput"
              />
              <Dropdown
                class="convert__currency"
                v-model="firstCurrency"
                :currencyList="listCurrenciesFiltered(firstCurrency)"
              />
            </div>
            <div class="convert__row">
              <Input
                class="input convert__input"
                :key="secondAmount"
                :value="secondAmount"
                @update="secondAmountInput"
              />
              <Dropdown
                class="convert__currency"
                v-model="secondCurrency"
                :currencyList="listCurrenciesFiltered(secondCurrency)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { inject, ref, watch } from "vue";
import Input from "@/components/Input.vue";
import Dropdown from "@/components/Dropdown.vue";

const { mainCurrency, listCurrencies, pairCurrencies } = inject("useCurrency");

function listCurrenciesFiltered(filterCurrency) {
  return listCurrencies.filter((currency) => currency != filterCurrency);
}

const firstAmount = ref(0);
const secondAmount = ref(0);

function firstAmountInput(value) {
  firstAmount.value = value;
  secondAmount.value = +(
    value * calcRate(firstCurrency.value, secondCurrency.value)
  ).toFixed(2);
}
function secondAmountInput(value) {
  secondAmount.value = value;
  firstAmount.value = +(
    value * calcRate(secondCurrency.value, firstCurrency.value)
  ).toFixed(2);
}

const firstCurrency = ref(mainCurrency.value);
const secondCurrency = ref(
  listCurrenciesFiltered(mainCurrency.value)?.[0] || mainCurrency.value
);

function calcRate(currency1, currency2) {
  const rate = pairCurrencies.value[`${currency1}-${currency2}`];
  return +rate;
}

watch(firstCurrency, (value, oldValue) => {
  if (secondCurrency.value == value) {
    secondCurrency.value = oldValue;
  }
  firstAmountInput(firstAmount.value);
});

watch(secondCurrency, (value, oldValue) => {
  if (firstCurrency.value == value) {
    firstCurrency.value = oldValue;
  }
  firstAmountInput(firstAmount.value);
});
</script>
