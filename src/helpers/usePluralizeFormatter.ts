export const usePluralizeFormatter = (count: number, wordToPluralize: string) =>
  count === 1 ? wordToPluralize : wordToPluralize + "s";
