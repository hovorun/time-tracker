import { ref, Ref, UnwrapRef } from "vue";

export type TUseLocalStateHook = <T>(
  initialValue: T | (() => T)
) => [Ref<UnwrapRef<T>>, (val: UnwrapRef<T>) => void];

export const useLocalState: TUseLocalStateHook = <T>(initialValue: T) => {
  const value =
    typeof initialValue === "function" ? initialValue() : initialValue;

  const initialValueRef = ref(value);
  const setValue = (val: UnwrapRef<T>) => {
    initialValueRef.value = val;
  };

  return [initialValueRef, setValue];
};
