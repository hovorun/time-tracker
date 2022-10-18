import { shallowMount } from "@vue/test-utils";
import { ReportLayout } from "@/layout";
import router from "@/router/router";

describe("ReportLayout", () => {
  const wrapper = shallowMount(ReportLayout, {
    global: {
      plugins: [router],
    },
  });

  it("It should load successfully", () => {
    expect(wrapper.find(".ReportLayout").exists()).toBe(true);
  });
});
