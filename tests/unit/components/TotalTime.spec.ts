import { shallowMount } from "@vue/test-utils";

import { TotalTime } from "@/components";

describe("TotalTime", () => {
  const wrapper = shallowMount(TotalTime, {
    props: {
      totalTimeAmount: "24:02",
    },
  });

  it("It should load successfully", () => {
    expect(wrapper.find(".TotalTime").exists()).toBe(true);
  });

  it("It should display total reported time correctly", () => {
    expect(wrapper.find(".time-amount").text()).toContain(
      "Reported per month: 24 hours 2 minutes"
    );
  });
});
