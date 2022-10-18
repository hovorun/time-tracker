export const useFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDay();
};
