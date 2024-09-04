<template>
  <Dropdown v-model="mainCurrency" :currencyList="listCurrencies" />
</template>

<script setup>
import { inject } from "vue";
import Dropdown from "./Dropdown.vue";

const { mainCurrency, listCurrencies } = inject("useCurrency");
</script>

<style></style>
