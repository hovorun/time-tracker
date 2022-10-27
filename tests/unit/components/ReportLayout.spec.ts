import { shallowMount } from "@vue/test-utils";
import { ReportLayout } from "@/layout";
import router from "@/router/router";

describe("ReportLayout", () => {
  window.scrollTo = jest.fn();

  const wrapper = shallowMount(ReportLayout, {
    global: {
      plugins: [router],
    },
    props: {
      currentEmployeeName: "Volodymyr",
      newEmployeeName: "TestEmployee",
    },
  });

  it("It should load successfully", () => {
    expect(wrapper.find(".ReportLayout").exists()).toBe(true);
  });
});
