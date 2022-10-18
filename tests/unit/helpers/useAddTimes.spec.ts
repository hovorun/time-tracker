import { useAddTimes } from "@/helpers";

describe("useAddTimes", () => {
  it("It should add hours with minutes correctly ", () => {
    expect(useAddTimes("02:30", "02:30")).toBe("05:00");
  });

  it("It should add hours correctly ", () => {
    expect(useAddTimes("02:00", "01:00")).toBe("03:00");
  });
});
