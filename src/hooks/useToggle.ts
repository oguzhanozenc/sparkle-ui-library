import { useState } from "react";

export default function useToggle(
  initialValue = false,
  onToggle?: (checked: boolean) => void
) {
  const [on, setOn] = useState(initialValue);

  const toggle = () => {
    setOn((prev) => {
      const newState = !prev;
      onToggle?.(newState);
      return newState;
    });
  };

  return [on, toggle] as const;
}
