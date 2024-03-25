<script setup lang="ts">
import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
import ProductList from '@/app/components/Products/ProductList.vue'

const emit = defineEmits(['update:layout'])
emit('update:layout', DefaultLayout)
</script>

<template>
  <div
    class="w-screen flex justify-content-center align-items-baseline"
    style="background-color: var(--blue-50); height: 100%; min-height: 100vh"
  >
    <div id="main-container" class="grid grid-nogutter">
      <div class="col-12">
        <h1>Resultados Para:</h1>
      </div>
      <div class="col-3">filtros</div>
      <div class="col-9">
        <ProductList />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#main-container {
  max-width: 1200px;
  width: 1200px;
  padding: 10px;
}
</style>
