import { useCurrentDay } from "@/helpers";

describe("useCurrentDay", () => {
  it("It should return current day", () => {
    const currentDay = new Date().getDay();
    expect(useCurrentDay()).toBe(currentDay);
  });
});
