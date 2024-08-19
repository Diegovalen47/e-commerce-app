<script lang="ts" setup>
import SearchInput from '@/app/components/Shared/SearchInput.vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const query = ref<string>('')

const searchQuery = async () => {
  router.push({
    path: '/products',
    query: {
      ...route.query,
      search: query.value
    }
  })
}
</script>

<template>
  <h1 class="bold-500">¿Que producto buscas?</h1>
  <SearchInput v-model="query" :on-click-action="searchQuery" />
</template>
