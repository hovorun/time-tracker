import { useCurrentDate } from "@/helpers";

describe("useCurrentDate", () => {
  it("It should return current date", () => {
    const currentDate = new Date().getDate();
    expect(useCurrentDate()).toBe(currentDate);
  });
});
