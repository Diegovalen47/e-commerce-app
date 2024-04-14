<script lang="ts" setup>
import { useProductStore } from '@/app/stores/product'
import Dropdown from 'primevue/dropdown'
import { watch } from 'vue'

const productsStore = useProductStore()

watch(
  () => productsStore.selectedOrderIndex,
  (newValue) => {
    productsStore.selectedOrderObject = productsStore.orderingOptions[newValue]
  }
)
</script>

<template>
  <div class="flex flex-column gap-1">
    <div class="flex gap-1 align-items-center">
      <h5>Ordenar por:</h5>
      <Dropdown
        v-model="productsStore.selectedOrderIndex"
        class="flex flex-grow-1"
        style="
          background-color: transparent;
          box-shadow: unset;
          border: unset;
          color: var(--blue-50);
        "
        :options="productsStore.orderingOptions"
        option-label="label"
        option-value="value"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
