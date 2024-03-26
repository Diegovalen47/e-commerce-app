<script setup lang="ts">
import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
import SearchSection from '@/app/components/Home/SearchSection.vue'

const emit = defineEmits(['update:layout'])
emit('update:layout', DefaultLayout)
</script>

<template>
  <div
    class="w-screen flex justify-content-center"
    style="background-color: var(--blue-50); height: 100%; min-height: 100vh"
  >
    <div id="main-container">
      <SearchSection />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#main-container {
  max-width: 1200px;
  width: 1200px;
  padding: 10px;
  display: flex;
  gap: 50px;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
</style>
