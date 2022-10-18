import { useLocalState } from "@/helpers";

describe("useLocalState", () => {
  it("It should return an array with value and value change function", () => {
    const [initialValueRef, setValue] = useLocalState("");
    expect(typeof initialValueRef).toBe("object");
    expect(typeof setValue).toBe("function");
  });

  it("It should update value correctly", () => {
    const [initialValueRef, setValue] = useLocalState("mockedArray");
    setValue("test");
    expect(initialValueRef.value).toBe("test");
  });
  it("It should set initial value correctly", () => {
    const [initialValueRef, setValue] = useLocalState("mockedArray");
    expect(initialValueRef.value).toBe("mockedArray");
  });
});
