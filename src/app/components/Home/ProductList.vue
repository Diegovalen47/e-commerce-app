<script lang="ts" setup>
import { useProductStore } from '@/app/stores/product'
import ProductListItem from '@/app/components/Home/ProductListItem.vue'

const productStore = useProductStore()

await productStore.fetchAllProducts()
</script>

<template>
  <div class="flex flex-column">
    <div v-for="(product, idx) in productStore.productsOrderedByRating" :key="idx">
      <ProductListItem
        :product="product"
        :idx="idx"
        :is-last="idx === productStore.productsOrderedByRating.length - 1"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
