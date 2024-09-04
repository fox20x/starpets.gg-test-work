<template>
  <main class="main">
    <div class="block-main">
      <div class="container block-main__container">
        <div class="block-main__wrapper">
          <div class="pair">
            <ul class="pair__list">
              <li
                v-for="(item, index) in listCurrenciesFiltered"
                :key="index"
                class="pair__item"
              >
                <div class="pair__item-rate">
                  {{ calcRate1(item, mainCurrency)?.toFixed(2) }}
                  <span class="currency">{{ item }}</span>
                </div>
                <div class="pair__item-equals">=</div>
                <div class="pair__item-main">
                  {{ calcRate2(item, mainCurrency)?.toFixed(2) }}
                  <span class="currency">{{ mainCurrency.toUpperCase() }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { inject, computed } from "vue";

const { mainCurrency, listCurrencies, pairCurrencies } = inject("useCurrency");

const listCurrenciesFiltered = computed(() => {
  return listCurrencies.filter((currency) => currency != mainCurrency.value);
});

function calcRate1(currency1, currency2) {
  const rate = +pairCurrencies.value[`${currency1}-${currency2}`];
  return rate <= 1 ? 1 / rate : 1;
}

function calcRate2(currency1, currency2) {
  const rate = +pairCurrencies.value[`${currency1}-${currency2}`];
  return rate <= 1 ? 1 : rate;
}
</script>
