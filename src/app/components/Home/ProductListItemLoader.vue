<script lang="ts" setup>
import LoaderPlaceholder from '@/app/components/Shared/LoaderPlaceholder.vue'
import { computed } from 'vue'

const props = defineProps<{
  idx: number
  isLast: boolean
}>()

const borderRadius = computed(() => {
  if (props.idx === 0) {
    return '16px 16px 0 0'
  } else if (props.isLast) {
    return '0 0 16px 16px'
  } else {
    return '0'
  }
})
</script>

<template>
  <div class="flex gap-4 product-card">
    <LoaderPlaceholder height="100%" width="168px" border-radius="16px" />
    <div class="flex flex-column justify-content-between flex-grow-1 py-3" style="height: 100%">
      <div style="text-transform: capitalize" class="flex flex-column gap-2">
        <LoaderPlaceholder v-for="n in 2" :key="n" width="100%" heigth="4px" />
      </div>
      <div class="flex flex-column gap-2">
        <LoaderPlaceholder width="50px" heigth="6px" />
        <LoaderPlaceholder width="100px" heigth="10px" />
      </div>
      <div class="flex justify-content-end">
        <LoaderPlaceholder width="150px" heigth="15px" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  padding: 16px;
  max-height: 200px;
  height: 200px;
  border-radius: v-bind(borderRadius);
  border: 1px solid var(--gray-200);
  background-color: var(--white);
  align-items: center;
}
</style>
