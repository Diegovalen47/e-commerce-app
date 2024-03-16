import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type ProductModel from '@/infrastructure/models/product_model'
import ProductRepositoryImpl from '@/infrastructure/repositories/product_repository_impl'

export const useProductStore = defineStore('product', () => {
  // Data Sources
  const _productRepository = ref<ProductRepositoryImpl>(new ProductRepositoryImpl())

  // State
  const products = ref<ProductModel[]>([])

  // Computed
  const productsOrderedByRating = computed(() => {
    return products.value.sort((a, b) => b.rating - a.rating)
  })

  // Actions
  const fetchAllProducts = async () => {
    const result = await _productRepository.value.getAllProducts()
    products.value = result
  }

  return {
    productsOrderedByRating,
    fetchAllProducts
  }
})
