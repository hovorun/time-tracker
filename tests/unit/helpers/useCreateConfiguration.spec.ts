import { useCreateConfiguration } from "@/helpers";

describe("useCreateConfiguration", () => {
  it("It should create correct user config", () => {
    const mockedUserConfig = {
      config: [
        {
          isHidden: true,
        },
        {
          isHidden: true,
        },
        {
          isHidden: true,
        },
        {
          isHidden: true,
        },
        {
          isHidden: true,
        },
        {
          endTime: "",
          id: 1,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 2,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 3,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 4,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 5,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 6,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 7,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 8,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 9,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 10,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 11,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 12,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 13,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 14,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 15,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 16,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 17,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 18,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 19,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 20,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 21,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 22,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 23,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 24,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 25,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 26,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 27,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 28,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 29,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 30,
          reportedTime: "00:00",
          startTime: "",
        },
        {
          endTime: "",
          id: 31,
          reportedTime: "00:00",
          startTime: "",
        },
      ],
      userName: "Volodymyr",
    };
    expect(useCreateConfiguration("Volodymyr")).toEqual(mockedUserConfig);
  });
});
