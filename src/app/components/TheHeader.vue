<script lang="ts" setup>
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
// import { RouterLink } from 'vue-router'
import { useProductStore } from '../stores/product'

import { onMounted } from 'vue'

const { fetchAllProducts, products } = useProductStore()

onMounted(async () => {
  await fetchAllProducts()
})
</script>

<template>
  <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
    <template #start>
      <div class="flex align-items-center gap-2">
        <Button label="Files" text plain />
        <Button label="Edit" text plain />
        <Button label="View" text plain />
      </div>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2">
        <Button label="Share" severity="contrast" size="small" />
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          style="width: 32px; height: 32px"
        />
      </div>
    </template>
  </Toolbar>
  <pre>
    {{ products }}
  </pre>
  <!-- <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div> -->
</template>

<style lang="scss" scoped></style>
