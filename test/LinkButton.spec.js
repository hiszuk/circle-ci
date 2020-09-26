import { shallowMount } from '@vue/test-utils'
import LinkButton from '@/basics/LinkButton.vue'

describe('LinkButton.vue', () => {
  const propsData = {
    type: 'blue',
    label: 'ButtonName'
  }

  describe('props', () => {
    test('propsの型が合っているか(label)', () => {
      const wrapper = shallowMount(LinkButton, { propsData })
      expect(typeof wrapper.vm.$props.label).toBe('string')
    })
  })

  describe('props', () => {
    test('propsの型が合っているか(type)', () => {
      const wrapper = shallowMount(LinkButton, { propsData })
      expect(typeof wrapper.vm.$props.type).toBe('string')
    })
  })

  describe('props', () => {
    test('propsが必須となっているか(label)', () => {
      const wrapper = shallowMount(LinkButton, { propsData })
      expect(wrapper.vm.$options.props.label.required).toBe(true)
    })
  })

  describe('props', () => {
    test('propsが必須となっていない(type)', () => {
      const wrapper = shallowMount(LinkButton, { propsData })
      expect(wrapper.vm.$options.props.type.required).toBe(false)
    })
  })

  describe('props', () => {
    test('propsを受け取れること(label)', () => {
      const wrapper = shallowMount(LinkButton, { propsData })
      expect(wrapper.vm.$props.label).toBe(propsData.label)
    })
  })

  describe('props', () => {
    test('propsを受け取れること(type)', () => {
      const wrapper = shallowMount(LinkButton, { propsData })
      expect(wrapper.vm.$props.type).toBe(propsData.type)
    })
  })

  describe('template', () => {
    it('snapshot', () => {
      const wrapper = shallowMount(LinkButton, { propsData })
      // レンダリング結果がスナップショットと同じか
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })

})
