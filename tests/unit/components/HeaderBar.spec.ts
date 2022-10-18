import { shallowMount } from "@vue/test-utils";

import { HeaderBar } from "@/layout";

describe("HeaderBar", () => {
  const wrapper = shallowMount(HeaderBar);

  it("It should load successfully", () => {
    expect(wrapper.find(".HeaderBar").exists()).toBe(true);
  });
});
