import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import ProductModel from '@/infrastructure/models/product_model'
import { ORDER_PRODUCTS_BY } from '@/infrastructure/models/product_model'
import ProductRepositoryImpl from '@/infrastructure/repositories/product_repository_impl'

type OrderObject = {
  label: string
  value: any
  property:
    | ProductModel['price']
    | ProductModel['title']
    | ProductModel['discountPercentage']
    | ProductModel['rating']
}

export enum Filter {
  DISCOUNT = 'discountPercentage',
  RATING = 'rating'
}

export const useProductStore = defineStore('product', () => {
  // Data Sources
  const productRepository = ref<ProductRepositoryImpl>(new ProductRepositoryImpl())

  // State
  const products = ref<ProductModel[]>([])
  const productsFetched = ref<boolean>(false)

  const productDetail = ref<ProductModel>(ProductModel.EmptyProduct())
  const productDetailFetched = ref<boolean>(false)

  const orderingOptions = ref<OrderObject[]>([
    { label: 'Calificación', value: ORDER_PRODUCTS_BY.RATING, property: 'rating' },
    { label: 'Precio', value: ORDER_PRODUCTS_BY.PRICE, property: 'price' },
    { label: 'Descuento', value: ORDER_PRODUCTS_BY.DISCOUNT, property: 'discountPercentage' }
  ])
  const selectedOrderIndex = ref(0)
  const selectedOrderObject = ref(orderingOptions.value[selectedOrderIndex.value])
  const filtersApplied = ref<Filter[]>([])
  const filterDiscountValue = ref<number>(10)
  const filterRatingValue = ref<number>(1)

  // Computed
  const productsOrderedBySelected = computed<ProductModel[]>(() => {
    return products.value.sort(
      (a, b) =>
        Number(b[selectedOrderObject.value.property as keyof ProductModel]) -
        Number(a[selectedOrderObject.value.property as keyof ProductModel])
    )
  })

  const filteredProducts = computed<ProductModel[]>(() => {
    if (filtersApplied.value.length === 0) {
      return productsOrderedBySelected.value
    }

    return filtersApplied.value.reduce((acc, selectedFilter) => {
      return acc.filter((product) => {
        if (selectedFilter === Filter.DISCOUNT) {
          return product[selectedFilter] >= filterDiscountValue.value
        } else if (selectedFilter === Filter.RATING) {
          return product[selectedFilter] >= filterRatingValue.value
        }
        return false
      })
    }, productsOrderedBySelected.value)
  })

  // Actions
  const fetchAllProducts = async () => {
    productsFetched.value = false

    const result = await productRepository.value.getAllProducts()
    products.value = result

    productsFetched.value = true
  }
  const fetchProductById = async (id: number) => {
    productDetailFetched.value = false

    const result = await productRepository.value.getProductById(id)
    productDetail.value = result

    productDetailFetched.value = true
  }
  const searchProducts = async (query: string) => {
    productsFetched.value = false

    const result = await productRepository.value.searchProducts(query)
    products.value = result

    productsFetched.value = true
  }
  const clearProductDetail = () => {
    productDetail.value = ProductModel.EmptyProduct()
    productDetailFetched.value = false
  }

  return {
    orderingOptions,
    filterDiscountValue,
    filterRatingValue,
    filtersApplied,
    selectedOrderIndex,
    selectedOrderObject,
    productRepository,
    products,
    productDetail,
    productsOrderedBySelected,
    filteredProducts,
    productsFetched,
    productDetailFetched,
    fetchAllProducts,
    fetchProductById,
    clearProductDetail,
    searchProducts
  }
})
