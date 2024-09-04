<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__wrapper">
        <nav class="nav header__nav">
          <a class="nav__link active" href="/">Главная </a
          ><a class="nav__link" href="/convert">Конвертация </a>
        </nav>
        <Dropdown />
      </div>
    </div>
  </header>
</template>

<script setup>
import Dropdown from "./Dropdown.vue";
</script>

<style></style>
