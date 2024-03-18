import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheHeader from '@/app/components/Base/TheHeader.vue'
import PrimeVue from 'primevue/config'
import router from '@/app/router'

describe('TheHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(TheHeader, {
      global: {
        plugins: [PrimeVue, router]
      }
    })
    expect(wrapper.html()).toContain('Search')
  })
})
