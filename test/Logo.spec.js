import { mount } from '@vue/test-utils'
import Logo from '@/basics/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
  // test('always false', () => {
  //   return false
  // })
})
