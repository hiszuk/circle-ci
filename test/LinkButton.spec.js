import { shallowMount } from "@vue/test-utils";
import LinkButton from "@/basics/LinkButton.vue";

const label = "ButtonName";
const factory = propsData => {
  return shallowMount(LinkButton, {
    propsData: {
      label,
      ...propsData
    }
  });
};

describe("LinkButton.vue", () => {
  describe("ラベル指定あり", () => {
    it("リンクボタン表示", () => {
      const wrapper = factory({ type: "blue" });
      expect(wrapper.vm.$props.label).toBe(label);
      expect(wrapper.vm.$props.type).toBe("blue");
      expect(typeof wrapper.vm.$props.label).toBe("string");
      expect(typeof wrapper.vm.$props.type).toBe("string");
      expect(wrapper.vm.$options.props.label.required).toBe(true);
      expect(wrapper.vm.$options.props.type.required).toBe(false);
    });
  });

  describe("ラベル指定なし", () => {
    it("リンクボタン表示", () => {
      const wrapper = factory();
      expect(wrapper.vm.$props.label).toBe(label);
      expect(wrapper.vm.$props.type).toBe("grey");
    });
  });

  describe("template", () => {
    it("snapshot", () => {
      const wrapper = factory({ type: "blue" });
      // レンダリング結果がスナップショットと同じか
      expect(wrapper.vm.$el).toMatchSnapshot();
    });
  });

  describe("LinkButtonClick", () => {
    it("ボタンクリックでメソッドが起動されるか?", () => {
      const wrapper = factory();

      // DOMを探してクリックする
      wrapper.find(".button--grey").trigger("click")
      // mockがコールされたか？
      expect(wrapper.emitted().click[0]).toEqual([]);
    });
  });

});
