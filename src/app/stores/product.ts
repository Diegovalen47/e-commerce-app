import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import ProductModel from '@/infrastructure/models/product_model'
import { ORDER_PRODUCTS_BY } from '@/infrastructure/models/product_model'
import ProductRepositoryImpl from '@/infrastructure/repositories/product_repository_impl'

type FilterObject = {
  label: string
  value: any
  property:
    | ProductModel['price']
    | ProductModel['title']
    | ProductModel['discountPercentage']
    | ProductModel['rating']
}

export const useProductStore = defineStore('product', () => {
  // Data Sources
  const productRepository = ref<ProductRepositoryImpl>(new ProductRepositoryImpl())

  // State
  const products = ref<ProductModel[]>([])
  const productsFetched = ref<boolean>(false)
  const orderingOptions = ref<FilterObject[]>([
    { label: 'Calificación', value: ORDER_PRODUCTS_BY.RATING, property: 'rating' },
    { label: 'Precio', value: ORDER_PRODUCTS_BY.PRICE, property: 'price' },
    { label: 'Descuento', value: ORDER_PRODUCTS_BY.DISCOUNT, property: 'discount' }
  ])
  const selectedOrderIndex = ref(0)
  const selectedOrderObject = ref(orderingOptions.value[selectedOrderIndex.value])

  // Computed
  const productsOrderedBySelected = computed(() => {
    return products.value.sort(
      (a, b) =>
        Number(b[selectedOrderObject.value.property as keyof ProductModel]) -
        Number(a[selectedOrderObject.value.property as keyof ProductModel])
    )
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
    orderingOptions,
    selectedOrderIndex,
    selectedOrderObject,
    productRepository,
    products,
    productsOrderedBySelected,
    productsFetched,
    fetchAllProducts,
    searchProducts
  }
})
