import { shallowMount } from "@vue/test-utils";

import { ReportDayTime } from "@/components";

describe("ReportDayTime", () => {
  const date = new Date().getDate();

  const wrapper = shallowMount(ReportDayTime, {
    props: {
      workDay: {
        id: date,
        isHidden: true,
        startTime: "13:00",
        endTime: "14:00",
      },
    },
  });

  it("It should load successfully", () => {
    expect(wrapper.find(".ReportDayTime").exists()).toBe(true);
  });

  it("It should be hidden if it's specified in the config", async () => {
    const reportDayTimeComponent = wrapper.find(".ReportDayTime");
    expect(reportDayTimeComponent.isVisible()).toBe(false);
  });

  it("It should be hidden highlighted if it's current day", async () => {
    const currentDay = wrapper.find(".current-day");
    expect(currentDay.classes().includes("highlighted")).toBe(true);
  });

  it("It should display reported time per day correctly", async () => {
    const reportedHoursCount = wrapper.find(".reported-hours-count");
    expect(reportedHoursCount.text()).toContain("01:00 h");
  });
});
