import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./Dropdown.module.css";
const Dropdown = ({ options, defaultValue, onChange, placeholder = "Select an option", disabled = false, }) => {
    const [selected, setSelected] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const handleSelect = (value) => {
        if (disabled)
            return;
        setSelected(value);
        onChange?.(value);
        setIsOpen(false);
    };
    return (_jsxs("div", { className: `${styles.dropdown} ${disabled ? styles.disabled : ""} ${isOpen ? styles.open : ""}`, children: [_jsx("button", { type: "button", className: styles.dropdownSelected, onClick: () => !disabled && setIsOpen((prev) => !prev), disabled: disabled, "aria-haspopup": "listbox", "aria-expanded": isOpen, children: options.find((opt) => opt.value === selected)?.label || placeholder }), _jsx("ul", { className: `${styles.dropdownMenu} ${isOpen ? styles.open : ""}`, role: "listbox", children: options.map((option) => (_jsx("li", { className: `${styles.dropdownItem} ${option.disabled ? styles.disabled : ""} ${selected === option.value ? styles.active : ""}`, onClick: () => !option.disabled && handleSelect(option.value), role: "option", "aria-selected": selected === option.value, children: option.label }, option.value))) })] }));
};
export default Dropdown;
