import { shallowMount } from "@vue/test-utils";

import { SelectDate } from "@/components";

describe("SelectDate", () => {
  const wrapper = shallowMount(SelectDate);

  it("It should load successfully", () => {
    expect(wrapper.find(".SelectDate").exists()).toBe(true);
  });

  it("It display current month correctly", () => {
    const currentMonth = new Date().getMonth();
    const MONTHS = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    expect(wrapper.find(".SelectDate p").text()).toContain(
      MONTHS[currentMonth]
    );
  });
});
