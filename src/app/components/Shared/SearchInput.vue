<script lang="ts" setup>
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const model = defineModel<string>()
const { onClickAction } = defineProps<{
  onClickAction: () => void
}>()
</script>

<template>
  <InputGroup>
    <InputText v-model="model" placeholder="Search" />
    <Button label="Buscar" icon="pi pi-search" @click="onClickAction" />
  </InputGroup>
</template>
