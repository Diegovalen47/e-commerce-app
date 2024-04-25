<script setup lang="ts">
import Sidebar from 'primevue/sidebar'
import { useShoppingCartStore } from '@/app/stores/shopping_cart'

const shoppingCartStore = useShoppingCartStore()
</script>

<template>
  <Sidebar v-model:visible="shoppingCartStore.cartExpanded" header="Right Sidebar" position="right">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </Sidebar>
</template>
