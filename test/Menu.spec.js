import { mount } from "@vue/test-utils";
import Menu from "@/components/Menu.vue";
import menuItems from "@/test/_mockData/menuItems.json";

const factory = () => {
  return mount(Menu, {
    propsData: {
      items: menuItems
    }
  });
};

describe("Menu.vue", () => {
  describe("プロパティ受け渡し", () => {
    it("メニューItem仕様チェック", () => {
      const wrapper = factory();
      expect(wrapper.vm.$props.items[0].label).toBe(menuItems[0].label);
      expect(wrapper.vm.$props.items[0].name).toBe(menuItems[0].name);
      expect(wrapper.vm.$props.items[1].label).toBe(menuItems[1].label);
      expect(wrapper.vm.$props.items[1].name).toBe(menuItems[1].name);
      expect(typeof wrapper.vm.$props.items).toBe("object");
      expect(wrapper.vm.$options.props.items.required).toBe(true);
    });
  });

  describe("template", () => {
    it("snapshot", () => {
      const wrapper = factory();
      // レンダリング結果がスナップショットと同じか
      expect(wrapper.vm.$el).toMatchSnapshot();
    });
  });

  describe("MenuClick", () => {
    it("ボタンクリックでメソッドが起動されるか?", () => {
      const wrapper = factory();

      // MENUをクリックする
      wrapper.findAll(".menu-item-label").at(0).trigger("click")
      expect(wrapper.emitted("clickMenuItem")).toBeTruthy();
      expect(wrapper.emitted("clickMenuItem")[0][0]).toEqual({
        name: menuItems[0].name
      });

      // MENUをクリックする
      wrapper.findAll(".menu-item-label").at(1).trigger("click")
      expect(wrapper.emitted("clickMenuItem")).toBeTruthy();
      expect(wrapper.emitted("clickMenuItem")[1][0]).toEqual({
        name: menuItems[1].name
      });
    });
  });

});
