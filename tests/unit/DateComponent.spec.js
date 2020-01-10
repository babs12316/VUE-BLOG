import { mount } from "@vue/test-utils";
import DateComponent from "@/components/DateComponent.vue";

describe("DateComponent", () => {
  const wrapper = mount(DateComponent, {
    propsData: {
      date: "26-11-19"
    }
  });

  it("props are passed correclty", () => {
    expect(wrapper.props("date")).toBe("26-11-19");
  });
  it("has a date class", () => {
    expect(wrapper.contains(".date")).toBe(true);
  });
});
