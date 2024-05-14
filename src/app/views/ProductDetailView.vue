<script setup lang="ts">
import Button from 'primevue/button'
import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
import LoaderPlaceholder from '@/app/components/Shared/LoaderPlaceholder.vue'
import { useProductStore } from '@/app/stores/product'
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps<{
  id: string
}>()

const router = useRouter()
const route = useRoute()
const productsStore = useProductStore()
const emit = defineEmits(['update:layout'])
emit('update:layout', DefaultLayout)

const canRender = computed(() => productsStore.productDetailFetched)
const product = computed(() => productsStore.productDetail)

onMounted(async () => {
  await productsStore.fetchProductById(parseInt(props.id))
})

const backToProducts = () => {
  productsStore.clearProductDetail()
  router.push({
    path: '/products',
    query: {
      ...route.query
    }
  })
}
</script>

<template>
  <div
    class="w-screen flex justify-content-center align-items-baseline"
    style="background-color: var(--blue-50); height: 100%; min-height: 100vh"
  >
    <div id="main-container" class="grid grid-nogutter">
      <div class="col-12 py-4">
        <div class="flex align-items-center gap-2" @click="backToProducts()">
          <Button icon="pi pi-chevron-left" text size="large" />
          <!-- <i class="pi pi-chevron-left" style="color: #000; font-size: 1.5rem" /> -->
          <h1 v-if="canRender">{{ product.title }}</h1>
          <LoaderPlaceholder v-else width="400px" height="28px" border-radius="16px" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#main-container {
  max-width: 1200px;
  width: 1200px;
  padding: 10px;
}
</style>
