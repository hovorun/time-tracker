export const useCurrentDate = (): number => {
  const date = new Date();
  return date.getDate();
};
