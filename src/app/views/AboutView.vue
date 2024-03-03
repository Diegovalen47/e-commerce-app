<script setup lang="ts">
import LandingLayout from "@/app/layouts/LandingLayout.vue"

const emit = defineEmits(['update:layout'])
emit('update:layout', LandingLayout)
</script>


<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
