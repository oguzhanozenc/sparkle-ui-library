import { useState } from "react";
import styles from "./Dropdown.module.css";

export type DropdownOption = {
  label: string;
  value: string | number;
  disabled?: boolean;
};

export type DropdownProps = {
  options: DropdownOption[];
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
};

const Dropdown = ({
  options,
  defaultValue,
  onChange,
  placeholder = "Select an option",
  disabled = false,
}: DropdownProps) => {
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string | number) => {
    if (disabled) return;
    setSelected(value);
    onChange?.(value);
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.dropdown} ${disabled ? styles.disabled : ""} ${
        isOpen ? styles.open : ""
      }`}
    >
      <button
        type="button"
        className={styles.dropdownSelected}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {options.find((opt) => opt.value === selected)?.label || placeholder}
      </button>
      <ul
        className={`${styles.dropdownMenu} ${isOpen ? styles.open : ""}`}
        role="listbox"
      >
        {options.map((option) => (
          <li
            key={option.value}
            className={`${styles.dropdownItem} ${
              option.disabled ? styles.disabled : ""
            } ${selected === option.value ? styles.active : ""}`}
            onClick={() => !option.disabled && handleSelect(option.value)}
            role="option"
            aria-selected={selected === option.value}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
