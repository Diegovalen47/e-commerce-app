<script setup lang="ts">
import DefaultLayout from '@/app/layouts/DefaultLayout.vue'

const emit = defineEmits(['update:layout'])
emit('update:layout', DefaultLayout)
</script>

<template>
  <div>Home</div>
</template>
