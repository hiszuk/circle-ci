import { shallowMount } from '@vue/test-utils'
import SiteTitle from '@/basics/SiteTitle.vue'

const title = "Site Title";
const factory = () => {
  return shallowMount(SiteTitle, {
    propsData: {
      title: title
    }
  });
};

describe('SiteTitle.vue', () => {

  describe('プロパティチェック', () => {
    it('propsの整合性チェック', () => {
      const wrapper = factory();
      expect(wrapper.vm.$props.title).toBe(title);
      expect(typeof wrapper.vm.$props.title).toBe("string");
      expect(wrapper.vm.$options.props.title.required).toBe(true);
    })
  })

  describe('template', () => {
    it('snapshot', () => {
      const wrapper = factory();
      // レンダリング結果がスナップショットと同じか
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })

})
