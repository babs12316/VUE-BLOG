import { mount } from "@vue/test-utils";
import HeaderComponent from "@/components/layout/HeaderComponent.vue";

describe("HeaderComponent", () => {
  const wrapper = mount(HeaderComponent);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      '<h1 class="headline center"><a href="/">Vue Blog</a></h1>'
    );
  });
});
