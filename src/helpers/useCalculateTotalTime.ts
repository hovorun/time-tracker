import { WorkDay } from "@/layout/ReportLayout/types";
import { useAddTimes } from "@/helpers";

export const useCalculateTotalTime = <T extends WorkDay>(
  timeArray: T[]
): string => {
  let totalTime = "00:00";

  timeArray.forEach((itm) => {
    if (itm?.reportedTime) {
      totalTime = useAddTimes(totalTime, itm.reportedTime);
    }
  });

  return totalTime;
};
