import { mount } from "@vue/test-utils";
import FooterComponent from "@/components/layout/FooterComponent.vue";

describe("FooterComponent", () => {
  const wrapper = mount(FooterComponent);

  it("has a footer id", () => {
    expect(wrapper.contains("#footer")).toBe(true);
  });
});
