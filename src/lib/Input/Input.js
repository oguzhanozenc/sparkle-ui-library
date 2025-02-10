import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./Input.module.css";
const Input = ({ type = "text", placeholder, value, onChange, prefix, suffix, error = false, }) => {
    const [internalValue, setInternalValue] = useState(value ?? "");
    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        }
        else {
            setInternalValue(e.target.value);
        }
    };
    return (_jsxs("div", { className: `${styles.inputWrapper} ${error ? styles.inputWrapperError : ""}`, children: [prefix && _jsx("span", { className: styles.prefix, children: prefix }), _jsx("input", { type: type, placeholder: placeholder, value: value ?? internalValue, onChange: handleChange, className: styles.input }), suffix && _jsx("span", { className: styles.suffix, children: suffix })] }));
};
export default Input;
