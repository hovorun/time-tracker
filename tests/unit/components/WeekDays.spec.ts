import { shallowMount } from "@vue/test-utils";

import { WeekDays } from "@/components";

describe("WeekDays", () => {
  const wrapper = shallowMount(WeekDays);

  it("It should load successfully", () => {
    expect(wrapper.find(".WeekDays").exists()).toBe(true);
  });

  it("It should display all week days", () => {
    expect(wrapper.find(".WeekDays").text()).toContain(
      "Monday Tuesday Wednesday Thursday Friday Saturday Sunday"
    );
  });
});
