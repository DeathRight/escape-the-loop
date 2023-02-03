// useToggle hook
import { useState } from "react";

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = (v?: boolean) => setValue(v === undefined ? !value : v);
  return [value, toggleValue] as const;
};
