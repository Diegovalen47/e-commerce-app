<script setup lang="ts">
import DefaultLayout from "@/app/layouts/DefaultLayout.vue"
import type { AxiosInstance } from "axios";
import { onMounted } from "vue";
import { AxiosKey } from '@/app/lib/symbols'
import { injectStrict } from '@/app/lib/utils'

const emit = defineEmits(['update:layout'])
emit('update:layout', DefaultLayout)

const axios = injectStrict<AxiosInstance>(AxiosKey)


const fetch = async () => {
  const response = await axios.get('/products')
  console.log(response.data)
}

onMounted(async () => {
  await fetch()
})

</script>

<template>
  <div>
    Home
  </div>
</template>
