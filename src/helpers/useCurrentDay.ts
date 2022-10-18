export const useCurrentDay = (): number => {
  const date = new Date();
  return date.getDay();
};
