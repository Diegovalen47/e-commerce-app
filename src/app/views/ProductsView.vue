<script setup lang="ts">
import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
import ProductList from '@/app/components/Products/ProductList.vue'
import ProductListItemLoader from '@/app/components/Products/ProductListItemLoader.vue'

const emit = defineEmits(['update:layout'])
emit('update:layout', DefaultLayout)
</script>

<template>
  <div class="w-screen flex justify-content-center" style="background-color: var(--blue-50)">
    <div id="main-container" class="grid grid-nogutter">
      <div class="col-12">
        <h1>Resultados Para:</h1>
      </div>
      <div class="col-3">filtros</div>
      <div class="col-9">
        <Suspense>
          <ProductList />
          <template #fallback>
            <div class="flex flex-column">
              <ProductListItemLoader v-for="n in 7" :key="n" :idx="n" :is-last="n === 6" />
            </div>
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#main-container {
  max-width: 1200px;
  width: 1200px;
  padding: 10px;
}
</style>
