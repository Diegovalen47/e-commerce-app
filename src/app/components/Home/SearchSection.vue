<script lang="ts" setup>
import SearchInput from '@/app/components/Shared/SearchInput.vue'
import { useProductStore } from '@/app/stores/product'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const productStore = useProductStore()

const query = ref<string>('')
const loading = ref<boolean>(false)

const searchQuery = async () => {
  loading.value = true
  await productStore.searchProducts(query.value)
  loading.value = false
  router.push('/products')
}
</script>

<template>
  <h1 class="bold-500">¿Que producto deseas buscar?</h1>
  <SearchInput v-model="query" :disabled="loading" :on-click-action="searchQuery" />
</template>
