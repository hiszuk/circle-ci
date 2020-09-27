import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import GlobalHeader from "@/containers/GlobalHeader.vue";
import Menu from "@/components/Menu.vue";
import menuItems from "@/test/_mockData/menuItems.json";

const localVue = createLocalVue();
localVue.use(Vuex);
const factory = ({ store, localVue }) => {
  return shallowMount(GlobalHeader, {
    store,
    localVue
  });
};

describe("GlobalHeader.vue", () => {
  // 初期化
  let store;
  beforeAll(() => {
    store = new Vuex.Store({
      state: {
        siteTitle: "test site title",
        menuItems: menuItems
      }
    });
  });

  describe("methods確認", () => {
    it("click menu item", () => {
      const wrapper = factory({ store, localVue });
      // method起動
      wrapper.vm.onClickMenuItem(menuItems[0]);
      expect(wrapper.emitted("navigate")).toBeTruthy();
      expect(wrapper.emitted("navigate")[0][0]).toEqual({
        name: menuItems[0].name
      });

      wrapper.vm.onClickMenuItem(menuItems[1]);
      expect(wrapper.emitted("navigate")).toBeTruthy();
      expect(wrapper.emitted("navigate")[1][0]).toEqual({
        name: menuItems[1].name
      });
    });

    it("click root", () => {
      const wrapper = factory({ store, localVue });
      wrapper.vm.navigateRoot();
      expect(wrapper.emitted("navigate")).toBeTruthy();
      expect(wrapper.emitted("navigate")[0][0]).toEqual({
        name: "/"
      });
    });
  });

  describe("template確認", () => {
    it("サイトタイトルクリック時にmethodがコールされるか", () => {
      const wrapper = factory({ store, localVue });
      wrapper.find(".global-header-title").trigger("click")
      expect(wrapper.emitted("navigate")).toBeTruthy();
      expect(wrapper.emitted("navigate")[0][0]).toEqual({
        name: "/"
      });
    })

    it("snapshot", () => {
      const wrapper = factory({ store, localVue });
      // レンダリング結果がスナップショットと同じか
      expect(wrapper.vm.$el).toMatchSnapshot();
    });
  });
});
