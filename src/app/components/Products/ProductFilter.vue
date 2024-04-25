<script lang="ts" setup>
import { useProductStore } from '@/app/stores/product'
import Dropdown from 'primevue/dropdown'
import Slider from 'primevue/slider'
import Checkbox from 'primevue/checkbox'
import Rating from 'primevue/rating'
import { ref, watch } from 'vue'
import { Filter } from '@/app/stores/product'

const productsStore = useProductStore()

const discountFilterChecked = ref<boolean>(false)
const ratingFilterChecked = ref<boolean>(false)

watch(
  () => productsStore.selectedOrderIndex,
  (newValue) => {
    productsStore.selectedOrderObject = productsStore.orderingOptions[newValue]
  }
)

watch(
  () => productsStore.selectedOrderIndex,
  (newValue) => {
    productsStore.selectedOrderObject = productsStore.orderingOptions[newValue]
  }
)

watch(discountFilterChecked, (newValue) => {
  if (newValue) {
    productsStore.filtersApplied.push(Filter.DISCOUNT)
    return
  }
  productsStore.filtersApplied = productsStore.filtersApplied.filter((e) => {
    return e !== Filter.DISCOUNT
  })
})

watch(ratingFilterChecked, (newValue) => {
  if (newValue) {
    productsStore.filtersApplied.push(Filter.RATING)
    return
  }
  productsStore.filtersApplied = productsStore.filtersApplied.filter((e) => {
    return e !== Filter.RATING
  })
})
</script>

<template>
  <div class="flex flex-column gap-3">
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
    <div class="flex flex-column gap-4">
      <div class="flex align-items-center gap-2">
        <Checkbox v-model="discountFilterChecked" :binary="true" />
        <h5>Descuento</h5>
        <span>{{ productsStore.filterDiscountValue }}%</span>
      </div>
      <Slider v-model="productsStore.filterDiscountValue" :disabled="!discountFilterChecked" />
    </div>
    <div class="flex flex-column gap-4">
      <div class="flex align-items-center gap-2">
        <Checkbox v-model="ratingFilterChecked" :binary="true" />
        <h5>Calificación</h5>
      </div>
      <Rating
        v-model="productsStore.filterRatingValue"
        :cancel="false"
        :disabled="!ratingFilterChecked"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
