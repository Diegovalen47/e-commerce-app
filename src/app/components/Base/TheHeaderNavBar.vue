<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex align-items-center justify-content-between px-2">
    <RouterLink to="/">Home</RouterLink>
    <div class="relative">
      <i class="pi pi-shopping-cart" style="color: var(--teal-50); font-size: 1.5rem" />
      <span
        class="bg-red-500 text-white border-circle px-1"
        style="
          font-size: 0.6rem;
          position: absolute;
          top: -5px;
          right: -5px;
          border: 2px solid var(--blue-400);
        "
      >
        {{ 5 }}
      </span>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
