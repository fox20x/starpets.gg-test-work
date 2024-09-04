<template>
  <Header />
  <router-view />
</template>

<script setup>
import { ref, provide } from "vue";
import axios from "axios";
import Header from "@/components/Header.vue";

const mainCurrency = ref("rub");
const updateMainCurrency = (currency) => (mainCurrency.value = currency);
const listCurrencies = ["rub", "usd", "eur"];

const pairCurrencies = ref([]);

provide("useCurrency", {
  mainCurrency,
  updateMainCurrency,
  listCurrencies,
  pairCurrencies,
});

axios
  .get("https://status.neuralgeneration.com/api/currency")
  .then((response) => {
    pairCurrencies.value = response.data;
  });
</script>

<style lang="sass">
@import '@/assets/sass/main.sass'
</style>
