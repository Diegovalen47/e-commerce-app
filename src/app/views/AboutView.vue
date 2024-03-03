<script setup lang="ts">
import LandingLayout from "@/app/layouts/LandingLayout.vue"

const emit = defineEmits(['update:layout'])
emit('update:layout', LandingLayout)
</script>


<template>
  <div>
    <h1>This is an about page</h1>
  </div>
</template>

<style>
</style>
