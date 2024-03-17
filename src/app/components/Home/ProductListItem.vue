<script lang="ts" setup>
import type ProductModel from '@/infrastructure/models/product_model'
import { computed } from 'vue'

const props = defineProps<{
  product: ProductModel
  idx: number
  isLast: boolean
}>()

const borderRadius = computed(() => {
  if (props.idx === 0) {
    return '16px 16px 0 0'
  } else if (props.isLast) {
    return '0 0 16px 16px'
  } else {
    return '0'
  }
})
</script>

<template>
  <div class="flex gap-4 product-card">
    <div style="width: 18%">
      <img :src="product.thumbnail" alt="product.name" />
    </div>
    <div class="flex flex-column justify-content-between" style="width: 82%">
      <div>
        <span style="text-transform: capitalize">{{ product.description }}</span>
      </div>
      <div class="flex flex-column gap-1">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  padding: 16px;
  max-height: 200px;
  border-radius: v-bind(borderRadius);
  border: 1px solid var(--gray-200);
  background-color: var(--white);
  align-items: center;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 10px 0 var(--gray-200);
    cursor: pointer;
  }

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1px solid var(--gray-200);
    object-fit: cover;
    border-radius: 16px;
  }
}
</style>
