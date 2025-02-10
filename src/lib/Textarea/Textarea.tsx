import React from "react";
import styles from "./Textarea.module.css";

export type TextareaProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  resize?: "none" | "horizontal" | "vertical";
  maxLength?: number;
  showCounter?: boolean;
  error?: boolean;
};

const Textarea = ({
  placeholder,
  value,
  onChange,
  resize = "vertical",
  maxLength,
  showCounter = false,
  error = false,
}: TextareaProps) => {
  return (
    <div className={`${styles.textareaWrapper} ${error ? styles.error : ""}`}>
      <textarea
        className={`${styles.textarea} ${
          resize !== "vertical" ? styles[`textarea-${resize}`] : ""
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      {showCounter && maxLength && (
        <div className={styles.counter}>
          {value?.length || 0}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default Textarea;
