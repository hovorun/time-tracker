import { shallowMount } from "@vue/test-utils";

import { TodayButton } from "@/components/base/buttons";

describe("TodayButton", () => {
  const wrapper = shallowMount(TodayButton);
  const todayButton = wrapper.find(".TodayButton");

  it("It should load successfully", () => {
    expect(todayButton.exists()).toBe(true);
  });
});
