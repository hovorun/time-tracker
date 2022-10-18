export const useCurrentYearAndMonth = (): number[] => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  return [currentYear, currentMonth];
};
