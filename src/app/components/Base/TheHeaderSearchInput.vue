<script lang="ts" setup>
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'
import InputGroupAddon from 'primevue/inputgroupaddon'
</script>

<template>
  <InputGroup>
    <InputText placeholder="Search" />
    <InputGroupAddon>
      <i class="pi pi-search" />
    </InputGroupAddon>
  </InputGroup>
</template>
