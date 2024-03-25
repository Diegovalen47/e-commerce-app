<script lang="ts" setup>
import TheHeaderBrandImage from '@/app/components/Base/TheHeaderBrandImage.vue'
import SearchInput from '@/app/components/Shared/SearchInput.vue'
import TheHeaderProfileAvatar from '@/app/components/Base/TheHeaderProfileAvatar.vue'
import TheHeaderNavBar from '@/app/components/Base/TheHeaderNavBar.vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const query = ref<string>('')

const searchQuery = async () => {
  router.push({
    path: '/products',
    query: {
      ...route.query,
      search: query.value
    }
  })
}
</script>

<template>
  <div class="w-screen flex justify-content-center" style="background-color: var(--blue-400)">
    <div id="navbar-grid">
      <TheHeaderBrandImage style="grid-area: nav-left-top" />
      <SearchInput
        v-model="query"
        :on-click-action="searchQuery"
        style="grid-area: nav-center-top"
      />
      <TheHeaderProfileAvatar style="grid-area: nav-right-top" />
      <TheHeaderNavBar style="grid-area: nav-center-bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#navbar-grid {
  max-width: 1200px;
  width: 1200px;
  padding: 8px 10px 12px 10px;
  display: grid;
  grid-template-areas:
    'nav-left-top nav-center-top nav-right-top'
    'nav-left-bottom nav-center-bottom nav-right-bottom';
  grid-template-columns: min-content auto min-content;
  grid-template-rows: 40px 28px;
  row-gap: 12px;
  column-gap: 12px;
  align-items: center;
}
</style>
