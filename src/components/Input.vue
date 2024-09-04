<template>
  <input
    type="tel"
    class="input"
    v-model="componentValue"
    :min="min"
    :max="max"
    @blur="inputValue"
    @keyup.enter="inputValue"
  />
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  value: { type: Number, default: null },
  min: { type: Number, default: 1 },
  max: { type: Number, default: null },
});

const emit = defineEmits(["update"]);

const componentValue = ref(props.value);
let oldValue = componentValue.value;

const min = +props.min;
const max = +props.max;

function inputValue(e) {
  let val = +e.target.value.match(/\d*\.\d*|\d*/);

  if (val) {
    if (min && val < min) {
      val = min;
    }
    if (max && val > max) {
      val = max;
    }
  } else {
    val = null;
  }

  if (oldValue != val) {
    oldValue = val;
    componentValue.value = val;
    emit("update", val);
  }
}
</script>
