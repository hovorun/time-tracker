import { useCurrentYearAndMonth } from "@/helpers";

describe("useCurrentYearAndMonth", () => {
  it("It should return an array with current year and month", () => {
    const date = new Date();
    const mockedArray = [date.getFullYear(), date.getMonth()];
    expect(useCurrentYearAndMonth()).toEqual(mockedArray);
  });
});
