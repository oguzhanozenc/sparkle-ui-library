import { useState } from "react";
import styles from "./Input.module.css";

export type InputProps = {
  type?: "text" | "password" | "email" | "search";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  error?: boolean;
};

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  prefix,
  suffix,
  error = false,
}: InputProps) => {
  const [internalValue, setInternalValue] = useState(value ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(e.target.value);
    }
  };

  return (
    <div
      className={`${styles.inputWrapper} ${
        error ? styles.inputWrapperError : ""
      }`}
    >
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value ?? internalValue}
        onChange={handleChange}
        className={styles.input}
      />
      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </div>
  );
};

export default Input;
