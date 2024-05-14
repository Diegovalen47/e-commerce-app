import { defineStore } from 'pinia'
import { useProductStore } from '@/app/stores/product'
import { ref } from 'vue'

export const useShoppingCartStore = defineStore('cart', () => {
  // Data sources
  const productsStore = useProductStore()

  // State
  const cartExpanded = ref<boolean>(false)

  return {
    cartExpanded
  }
})
