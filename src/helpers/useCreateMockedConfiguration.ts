import {
  useCurrentYearAndMonth,
  useDaysInMonth,
  useFirstDayOfMonth,
} from "@/helpers";
import { UserConfiguration } from "@/layout/ReportLayout/types";
const [currentYear, currentMonth] = useCurrentYearAndMonth();
const daysToSkip = useFirstDayOfMonth(currentYear, currentMonth);

export const useCreateMockedConfiguration = (
  userName: string
): UserConfiguration => {
  const daysConfiguration = [];
  const daysQuantity = useDaysInMonth(currentYear, currentMonth) + daysToSkip;

  for (let i = 0; i < daysQuantity; i++) {
    if (i < daysToSkip) {
      daysConfiguration.push({ isHidden: true });
      continue;
    }

    daysConfiguration.push({
      id: i - daysToSkip + 1,
      reportedTime: "00:00",
      startTime: "",
      endTime: "",
    });
  }

  return {
    userName,
    config: daysConfiguration,
  };
};
