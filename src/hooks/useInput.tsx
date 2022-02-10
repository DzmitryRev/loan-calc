import { useState } from "react";

function useInput(defaultValue: string = "0") {
  const [value, setValue] = useState<string>(defaultValue);
  const putValue = (val: string) => {
    if (!val) {
      setValue("0");
    } else if (value === "0" && val.length > 1 && val.slice(-1) !== ".") {
      setValue(val.slice(1));
    } else {
      setValue(val);
    }
  };
  return { value, putValue };
}

export default useInput;
