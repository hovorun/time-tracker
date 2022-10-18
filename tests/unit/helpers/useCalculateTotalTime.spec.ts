import { useCalculateTotalTime } from "@/helpers";

describe("useCalculateTotalTime", () => {
  it("It should calculate time correctly", () => {
    const mockedUserConfig = [
      {
        id: 1,
        reportedTime: "01:00",
        startTime: "",
        endTime: "",
      },
      {
        id: 2,
        reportedTime: "00:30",
        startTime: "",
        endTime: "",
      },
      {
        id: 3,
        reportedTime: "02:30",
        startTime: "",
        endTime: "",
      },
    ];
    expect(useCalculateTotalTime(mockedUserConfig)).toBe("04:00");
  });

  it("It should return 0 when there is no reported time", () => {
    const mockedUserConfig = [
      {
        id: 1,
        startTime: "",
        endTime: "",
      },
    ];
    expect(useCalculateTotalTime(mockedUserConfig)).toBe("00:00");
  });
});
