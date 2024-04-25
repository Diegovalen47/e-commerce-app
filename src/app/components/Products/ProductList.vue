<script lang="ts" setup>
import { useProductStore } from '@/app/stores/product'
import ProductListItem from '@/app/components/Products/ProductListItem.vue'
import ProductListItemLoader from '@/app/components/Products/ProductListItemLoader.vue'
import { useRoute } from 'vue-router'
import { computed, onMounted, watch } from 'vue'

const productsStore = useProductStore()
const route = useRoute()
const query = computed(() => route.query.search)

watch(query, async (newQuery, oldQuery) => {
  if (newQuery && newQuery !== oldQuery) {
    if (newQuery !== '') {
      await productsStore.searchProducts(newQuery as string)
    } else {
      await productsStore.fetchAllProducts()
    }
  }
})

onMounted(async () => {
  if (query.value) {
    await productsStore.searchProducts(query.value as string)
  } else {
    await productsStore.fetchAllProducts()
  }
})
</script>

<template>
  <div v-if="productsStore.productsFetched" class="flex flex-column">
    <ProductListItem
      v-for="(product, idx) in productsStore.filteredProducts"
      :key="idx"
      :product="product"
      :idx="idx"
      :is-last="idx === productsStore.filteredProducts.length - 1"
    />
    <div
      v-if="productsStore.filteredProducts.length === 0"
      class="flex flex-column align-items-center py-8"
    >
      <h1 class="bold-500">No se encontraron productos</h1>
    </div>
  </div>
  <div v-else class="flex flex-column">
    <ProductListItemLoader v-for="(_, i) in 7" :key="i" :idx="i" :is-last="i === 6" />
  </div>
</template>

<style lang="scss" scoped></style>
