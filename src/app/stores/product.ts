import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type ProductModel from '@/infrastructure/models/product_model'
import ProductRepositoryImpl from '@/infrastructure/repositories/product_repository_impl'

export const useProductsPrivateStore = defineStore('productsPrivate', () => {
  // Data Sources
  const productRepository = ref<ProductRepositoryImpl>(new ProductRepositoryImpl())

  // State
  const products = ref<ProductModel[]>([])

  const setProducts = (newProducts: ProductModel[]) => {
    products.value = newProducts
  }

  return {
    productRepository,
    products,
    setProducts
  }
})

export const useProductStore = defineStore('product', () => {
  // Data Sources
  const productRepository = ref<ProductRepositoryImpl>(new ProductRepositoryImpl())

  // State
  const products = ref<ProductModel[]>([])

  // Computed
  const productsOrderedByRating = computed(() => {
    return products.value.sort((a, b) => b.rating - a.rating)
  })

  // Actions
  const fetchAllProducts = async () => {
    const result = await productRepository.value.getAllProducts()
    products.value = result
  }
  const searchProducts = async (query: string) => {
    const result = await productRepository.value.searchProducts(query)
    products.value = result
  }

  return {
    productRepository,
    products,
    productsOrderedByRating,
    fetchAllProducts,
    searchProducts
  }
})
