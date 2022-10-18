import { useDaysInMonth } from "@/helpers";

describe("useDaysInMonth", () => {
  it("It should return count of days in specific year and month", () => {
    const DAYS_COUNT_IN_OCTOBER_2022 = 31;
    expect(useDaysInMonth(2022, 9)).toBe(DAYS_COUNT_IN_OCTOBER_2022);
  });
});
