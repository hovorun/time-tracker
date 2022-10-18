import { useSubstractTimes } from "@/helpers";

describe("useSubstractTimes", () => {
  it("It should substract hours with minutes correctly ", () => {
    expect(useSubstractTimes("02:30", "03:30")).toBe("01:00");
  });

  it("It should substract hours correctly ", () => {
    expect(useSubstractTimes("01:00", "02:00")).toBe("01:00");
  });
});
