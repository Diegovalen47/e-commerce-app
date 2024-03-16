<script lang="ts" setup>
import shopImgUrl from '@/app/assets/img/shop.webp'
</script>

<template>
  <Image
    :src="shopImgUrl"
    alt="Image"
    width="40"
    style="mix-blend-mode: multiply"
    class="flex justify-content-center align-items-center"
  />
</template>
