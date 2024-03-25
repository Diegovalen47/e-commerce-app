import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type ProductModel from '@/infrastructure/models/product_model'
import ProductRepositoryImpl from '@/infrastructure/repositories/product_repository_impl'

export const useProductStore = defineStore('product', () => {
  // Data Sources
  const productRepository = ref<ProductRepositoryImpl>(new ProductRepositoryImpl())

  // State
  const products = ref<ProductModel[]>([])
  const productsFetched = ref<boolean>(false)
  // Computed
  const productsOrderedByRating = computed(() => {
    return products.value.sort((a, b) => b.rating - a.rating)
  })

  // Actions
  const fetchAllProducts = async () => {
    productsFetched.value = false

    const result = await productRepository.value.getAllProducts()
    products.value = result

    productsFetched.value = true
  }
  const searchProducts = async (query: string) => {
    productsFetched.value = false

    const result = await productRepository.value.searchProducts(query)
    products.value = result

    productsFetched.value = true
  }

  return {
    productRepository,
    products,
    productsOrderedByRating,
    productsFetched,
    fetchAllProducts,
    searchProducts
  }
})
