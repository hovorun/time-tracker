import { shallowMount } from "@vue/test-utils";

import { AppLayout } from "@/layout";

describe("AppLayout", () => {
  const wrapper = shallowMount(AppLayout);

  it("It should load successfully", () => {
    expect(wrapper.find(".AppLayout").exists()).toBe(true);
  });
});
