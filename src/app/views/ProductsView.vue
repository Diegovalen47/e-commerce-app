<script setup lang="ts">
import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
import ProductFilter from '@/app/components/Products/ProductFilter.vue'
import ProductList from '@/app/components/Products/ProductList.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const emit = defineEmits(['update:layout'])
emit('update:layout', DefaultLayout)

const route = useRoute()
const query = computed(() => route.query.search)

console.log('query', route.query)
</script>

<template>
  <div
    class="w-screen flex justify-content-center align-items-baseline"
    style="background-color: var(--blue-50); height: 100%; min-height: 100vh"
  >
    <div id="main-container" class="grid grid-nogutter">
      <div class="col-12 py-4">
        <div class="flex align-items-center gap-2">
          <h1>Resultados para:</h1>
          <h1 class="bold-600" style="color: var(--blue-400)">
            <template v-if="query === '' || query === undefined"> Todos los productos </template>
            <template v-else>
              {{ query }}
            </template>
          </h1>
        </div>
      </div>
      <div class="col-3">
        <ProductFilter />
      </div>
      <div class="col-9">
        <ProductList class="px-3" />
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
