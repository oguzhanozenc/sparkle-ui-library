import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./Checkbox.module.css";
const Checkbox = ({ label, checked = false, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);
    const handleChange = () => {
        setIsChecked(!isChecked);
        if (onChange) {
            onChange(!isChecked);
        }
    };
    return (_jsxs("label", { className: styles.checkbox, children: [_jsx("input", { type: "checkbox", checked: isChecked, onChange: handleChange, className: styles.hiddenCheckbox }), _jsx("span", { className: styles.checkmark }), label && _jsx("span", { className: styles.label, children: label })] }));
};
export default Checkbox;
