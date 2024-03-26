<script lang="ts" setup>
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { computed } from 'vue'

const model = defineModel<string>()
const { onClickAction } = defineProps<{
  onClickAction: () => void
}>()

const canClick = computed(() => {
  if (model.value) {
    return model.value.length > 0
  }
  return false
})

function validateAction() {
  if (canClick.value) {
    onClickAction()
  }
}
</script>

<template>
  <InputGroup>
    <InputText v-model="model" placeholder="Search" @keyup.enter="validateAction" />
    <Button label="Buscar" icon="pi pi-search" :disabled="!canClick" @click="onClickAction" />
  </InputGroup>
</template>
