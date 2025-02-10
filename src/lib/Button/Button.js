import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Button.module.css";
const Button = ({ children, variant = "primary", size = "medium", disabled = false, loading = false, className = "", ...props }) => {
    return (_jsx("button", { className: `
        ${styles.button} 
        ${styles[`button-${variant}`]} 
        ${styles[`button-${size}`]} 
        ${disabled ? styles["button-disabled"] : ""} 
        ${className}
      `, disabled: disabled || loading, ...props, children: loading ? _jsx("span", { className: styles.loader }) : children }));
};
export default Button;
