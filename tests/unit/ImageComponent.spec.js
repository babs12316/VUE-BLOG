import { mount } from "@vue/test-utils";
import ImageComponent from "@/components/ImageComponent.vue";

describe("ImageComponent", () => {
  const wrapper = mount(ImageComponent, {
    propsData: {
      image: "test.png"
    }
  });

  it("props are passed correclty", () => {
    expect(wrapper.props("image")).toBe("test.png");
  });
  it("has a myimage class", () => {
    expect(wrapper.contains(".myimage")).toBe(true);
  });
  it("has a image", () => {
    expect(wrapper.contains("img")).toBe(true);
  });
});
