import { ref } from 'vue'
import { defineStore } from 'pinia'
import type ProductModel from '@/infrastructure/models/product_model'
import ProductRepositoryImpl from '@/infrastructure/repositories/product_repository_impl'

export const useProductStore = defineStore('product', () => {
  const _productRepository = ref<ProductRepositoryImpl>(new ProductRepositoryImpl())

  const products = ref<ProductModel[]>([])

  const fetchAllProducts = async () => {
    const result = await _productRepository.value.getAllProducts()
    products.value = result
  }

  return {
    products,
    fetchAllProducts
  }
})
