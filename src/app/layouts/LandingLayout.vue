<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <div class="wrapper">
      <p>&copy; 2021</p>
    </div>
  </footer>
</template>

<style scoped></style>
