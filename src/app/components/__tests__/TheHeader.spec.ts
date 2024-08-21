import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/app/components/Base/TheHeader.vue'

describe('TheHeader.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(TheHeader)
    expect(wrapper.exists()).toBe(true)
  })
})
