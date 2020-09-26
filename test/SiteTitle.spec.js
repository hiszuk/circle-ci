import { shallowMount } from '@vue/test-utils'
import SiteTitle from '@/basics/SiteTitle.vue'

describe('SiteTitle.vue', () => {
  const propsData = {
    title: 'Site Title'
  }

  describe('props', () => {
    test('propsの型が合っているか', () => {
      const wrapper = shallowMount(SiteTitle, { propsData })
      expect(typeof wrapper.vm.$props.title).toBe('string')
    })
  })

  describe('props', () => {
    test('propsが必須となっているか', () => {
      const wrapper = shallowMount(SiteTitle, { propsData })
      expect(wrapper.vm.$options.props.title.required).toBe(true)
    })
  })

  describe('props', () => {
    test('propsを受け取れること', () => {
      const wrapper = shallowMount(SiteTitle, { propsData })
      expect(wrapper.vm.$props.title).toBe(propsData.title)
    })
  })

  describe('template', () => {
    it('snapshot', () => {
      const wrapper = shallowMount(SiteTitle, { propsData })
      // レンダリング結果がスナップショットと同じか
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })

})
