import { useState } from "react";
import styles from "./Checkbox.module.css";

export type CheckboxProps = {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const Checkbox = ({ label, checked = false, onChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles.hiddenCheckbox}
      />

      <span className={styles.checkmark}></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
