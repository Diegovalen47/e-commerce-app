<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import DefaultLayout from "@/app/layouts/DefaultLayout.vue"

const emit = defineEmits(['update:layout'])
emit('update:layout', DefaultLayout)
</script>

<template>
  <TheWelcome />
</template>
