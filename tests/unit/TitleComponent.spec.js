import { mount } from "@vue/test-utils";
import TitleComponent from "@/components/TitleComponent.vue";

describe("TitleComponent", () => {
  const wrapper = mount(TitleComponent, {
    propsData: {
      title: "I am title"
    }
  });

  it("props are passed correclty", () => {
    expect(wrapper.props("title")).toBe("I am title");
  });

  it("has a title class", () => {
    expect(wrapper.contains(".title")).toBe(true);
  });
});
