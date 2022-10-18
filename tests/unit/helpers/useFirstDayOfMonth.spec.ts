import { useFirstDayOfMonth } from "@/helpers";

describe("useFirstDayOfMonth", () => {
  it("It should return number of first day in specific year and month according week", () => {
    const firstDayOfMonth = new Date(2022, 10, 0).getDay();
    expect(useFirstDayOfMonth(2022, 10)).toBe(firstDayOfMonth);
  });
});
