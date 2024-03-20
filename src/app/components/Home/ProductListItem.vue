<script lang="ts" setup>
import { currencyFormatter } from '@/config/currencyFormatter'
import type ProductModel from '@/infrastructure/models/product_model'
import { computed } from 'vue'

const props = defineProps<{
  product: ProductModel
  idx: number
  isLast: boolean
}>()

const discountedPrice = computed(() => {
  return props.product.price * (1 - props.product.discountPercentage / 100)
})

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
    <img :src="product.thumbnail" :alt="product.title" />
    <div class="flex flex-column justify-content-between flex-grow-1 py-3" style="height: 100%">
      <div style="text-transform: capitalize">
        <h6 style="display: inline" class="bold-500">{{ product.title }}:</h6>
        <span>{{ ' ' }}</span>
        <h6 style="display: inline" class="bold-300">
          {{ product.description }}
        </h6>
      </div>
      <div class="flex flex-column gap-1">
        <small
          v-if="product.discountPercentage > 0"
          style="text-decoration: line-through; opacity: 0.5"
        >
          {{ currencyFormatter(product.price) }} USD
        </small>
        <div class="flex align-items-center gap-1">
          <h5>{{ currencyFormatter(discountedPrice) }} USD</h5>
          <small v-if="product.discountPercentage > 0" style="color: var(--blue-400)">
            {{ product.discountPercentage.toFixed(1) }}% OFF
          </small>
        </div>
      </div>
      <div class="flex justify-content-end">
        <div class="flex align-content-center gap-2">
          <h6>{{ product.rating.toFixed(1) }}</h6>
          <div class="flex gap-1">
            <i
              v-for="i in 5"
              :key="i"
              :class="`pi pi-star${product.rating >= i ? '-fill' : ''}`"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  padding: 16px;
  max-height: 200px;
  height: 200px;
  border-radius: v-bind(borderRadius);
  border: 1px solid var(--gray-200);
  background-color: var(--white);
  align-items: center;

  &:hover {
    box-shadow: 0 0 10px 0 var(--gray-200);
    cursor: pointer;
  }

  img {
    height: 100%;
    aspect-ratio: 1 / 1;
    border: 1px solid var(--gray-200);
    object-fit: cover;
    border-radius: 16px;
  }
}
</style>
