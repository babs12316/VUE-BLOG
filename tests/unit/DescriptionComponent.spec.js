import { mount } from "@vue/test-utils";
import DescriptionComponent from "@/components/DescriptionComponent.vue";

describe("DescriptionComponent", () => {
  const wrapper = mount(DescriptionComponent, {
    propsData: {
      description: "I am test description. Lets test it!"
    }
  });

  it("props are passed correclty", () => {
    expect(wrapper.props("description")).toBe(
      "I am test description. Lets test it!"
    );
  });

  it("has a description class", () => {
    expect(wrapper.contains(".description")).toBe(true);
  });

  it("has a paragarph", () => {
    expect(wrapper.contains("p")).toBe(true);
  });
});
