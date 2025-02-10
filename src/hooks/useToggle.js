import { useState } from "react";
export default function useToggle(initialValue = false, onToggle) {
    const [on, setOn] = useState(initialValue);
    const toggle = () => {
        setOn((prev) => {
            const newState = !prev;
            onToggle?.(newState);
            return newState;
        });
    };
    return [on, toggle];
}
