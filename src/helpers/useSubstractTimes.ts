export const useSubstractTimes = (
  startTime: string,
  endTime: string
): string => {
  const splittedStartTime = startTime.split(":");
  const splittedEndTime = endTime.split(":");
  const startDate = new Date(
    0,
    0,
    0,
    Number(splittedStartTime[0]),
    Number(splittedStartTime[1]),
    0
  );
  const endDate = new Date(
    0,
    0,
    0,
    Number(splittedEndTime[0]),
    Number(splittedEndTime[1]),
    0
  );
  let diff = endDate.getTime() - startDate.getTime();
  const hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(diff / 1000 / 60);

  return (
    (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes
  );
};
