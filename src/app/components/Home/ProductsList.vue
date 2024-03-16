<script lang="ts" setup>
import { useProductStore } from '@/app/stores/product'

const productStore = useProductStore()
// await productStore.fetchAllProducts()
await new Promise((resolve) => setTimeout(resolve, 100000))
</script>

<template>
  <div>
    <h1>Products List</h1>
    <div>
      <div v-for="product in productStore.productsOrderedByRating" :key="product.id">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
