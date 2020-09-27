import { shallowMount } from "@vue/test-utils";
import MenuItem from "@/components/MenuItem.vue";

const label = "MenuLabel";
const name = "linkurl";
const factory = () => {
  return shallowMount(MenuItem, {
    propsData: {
      label: label,
      name: name
    }
  });
};

describe("MenuItem.vue", () => {
  describe("プロパティ受け渡し", () => {
    it("リンクボタン表示", () => {
      const wrapper = factory();
      expect(wrapper.vm.$props.label).toBe(label);
      expect(wrapper.vm.$props.name).toBe(name);
      expect(typeof wrapper.vm.$props.label).toBe("string");
      expect(typeof wrapper.vm.$props.name).toBe("string");
      expect(wrapper.vm.$options.props.label.required).toBe(true);
      expect(wrapper.vm.$options.props.name.required).toBe(true);
    });
  });

  describe("template", () => {
    it("snapshot", () => {
      const wrapper = factory();
      // レンダリング結果がスナップショットと同じか
      expect(wrapper.vm.$el).toMatchSnapshot();
    });
  });

  describe("MenuItemClick", () => {
    it("ボタンクリックでメソッドが起動されるか?", () => {
      const wrapper = factory();

      // DOMを探してクリックする
      wrapper.find(".menu-item-label").trigger("click");
      // mockがコールされたか？
      expect(wrapper.emitted().clickMenuItem[0]).toEqual([{ name: name }]);
    });
  });
});
