import { mount } from "@vue/test-utils";
import AuthorComponent from "@/components/AuthorComponent.vue";

describe("AuthorComponent", () => {
  const wrapper = mount(AuthorComponent, {
    propsData: {
      author: "Don"
    }
  });

  it("props are passed correclty", () => {
    expect(wrapper.props("author")).toBe("Don");
  });
  it("has a author class", () => {
    expect(wrapper.contains(".author")).toBe(true);
  });
});
