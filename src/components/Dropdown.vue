<template>
  <div class="dropdown" v-if="model">
    <button class="dropdown__button">
      {{ model.toUpperCase() }}
      <span class="arrow material-symbols-rounded">keyboard_arrow_down</span>
    </button>
    <div class="dropdown__content">
      <ul class="currency-list">
        <li
          v-for="(item, index) in props.currencyList"
          :key="index"
          class="currency-list__item"
          :class="{ active: item == model }"
          @click="model = item"
        >
          {{ item.toUpperCase() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineModel, defineProps } from "vue";
const model = defineModel();

const props = defineProps({
  currencyList: { type: Array, default: () => [] },
});

// function select(currencyName) {
//   currencyModel.value = currencyName;
// }
</script>

<style></style>
