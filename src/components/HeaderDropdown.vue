<template>
  <div class="dropdown" v-if="mainCurrency">
    <button class="dropdown__button">
      {{ mainCurrency.toUpperCase() }}
      <span class="arrow material-symbols-rounded">keyboard_arrow_down</span>
    </button>
    <div class="dropdown__content">
      <ul class="currency-list">
        <li
          v-for="(item, index) in listCurrencies"
          :key="index"
          class="currency-list__item"
          :class="{ active: item == mainCurrency }"
          @click="select(item)"
        >
          {{ item.toUpperCase() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const { mainCurrency, updateMainCurrency, listCurrencies } =
  inject("useCurrency");

function select(currencyName) {
  console.log("currencyName: ", currencyName);
  updateMainCurrency(currencyName);
}
</script>

<style></style>
