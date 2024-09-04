<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__wrapper">
        <nav class="nav header__nav">
          <router-link class="nav__link" to="/" active-class="active">
            Главная
          </router-link>
          <router-link class="nav__link" to="/convert" active-class="active">
            Конвертация
          </router-link>
        </nav>
        <SelectCurrency class="header__dropdown" />
      </div>
    </div>
  </header>
</template>

<script setup>
import SelectCurrency from "./SelectCurrency.vue";
</script>

<style></style>
