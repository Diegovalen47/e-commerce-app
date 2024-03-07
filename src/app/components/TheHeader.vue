<script lang="ts" setup>
import shopImgUrl from '@/app/assets/img/shop.webp'
import InputText from 'primevue/inputtext'
import Image from 'primevue/image'
import Avatar from 'primevue/avatar'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'

// import { RouterLink } from 'vue-router'
import { useProductStore } from '../stores/product'

import { onMounted } from 'vue'

const { fetchAllProducts, products } = useProductStore()

onMounted(async () => {
  await fetchAllProducts()
})
</script>

<template>
  <div class="w-screen flex justify-content-center" style="background-color: var(--blue-400)">
    <div id="navbar-grid" style="max-width: 1200px; width: 1200px; padding: 8px 10px 12px 10px">
      <div style="grid-area: nav-left-top">
        <Image
          :src="shopImgUrl"
          alt="Image"
          width="40"
          style="mix-blend-mode: multiply"
          class="flex justify-content-center align-items-center"
        />
      </div>
      <div style="grid-area: nav-center-top">
        <InputGroup>
          <InputText placeholder="Search" />
          <InputGroupAddon><i class="pi pi-search" /></InputGroupAddon>
        </InputGroup>
      </div>
      <div style="grid-area: nav-right-top" class="flex align-items-center gap-2">
        <Avatar label="V" size="normal" shape="circle" />
        <span class="hidden sm:block" style="color: var(--teal-50)">Valentin</span>
      </div>
      <nav
        style="grid-area: nav-center-bottom"
        class="flex align-items-center justify-content-between px-2"
      >
        <RouterLink to="/">Home</RouterLink>
        <div class="relative">
          <i class="pi pi-shopping-cart" style="color: var(--teal-50); font-size: 1.5rem" />
          <span
            class="bg-red-500 text-white border-circle px-1"
            style="
              font-size: 0.6rem;
              position: absolute;
              top: -5px;
              right: -5px;
              border: 2px solid var(--blue-400);
            "
          >
            {{ 5 }}
          </span>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#navbar-grid {
  display: grid;
  grid-template-areas:
    'nav-left-top nav-center-top nav-right-top'
    'nav-left-bottom nav-center-bottom nav-right-bottom';
  grid-template-columns: min-content auto min-content;
  grid-template-rows: 40px 28px;
  row-gap: 12px;
  column-gap: 12px;
  align-items: center;
}
</style>
