<script lang="ts" setup>
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'
import { defineProps } from 'vue'

const model = defineModel<string>()
const { onClickAction } = defineProps<{
  onClickAction: () => void
  disabled: boolean
}>()
</script>

<template>
  <InputGroup>
    <InputText v-model="model" placeholder="Search" />
    <Button icon="pi pi-search" :disabled="disabled" @click="onClickAction" />
  </InputGroup>
</template>
