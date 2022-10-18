import { usePluralizeFormatter } from "@/helpers";

describe("usePluralizeFormatter", () => {
  it("It should return s ending if it's plural", () => {
    expect(usePluralizeFormatter(2, "hour")).toBe("hours");
  });

  it("It shouldn't return s ending if it's single", () => {
    expect(usePluralizeFormatter(1, "hour")).toBe("hour");
  });
});
