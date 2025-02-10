import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Badge.module.css";
const Badge = ({ children, className = "", isActive = false, variant = "default", disabled = false, }) => {
    return (_jsx("span", { className: `
        ${styles.badge} 
        ${styles[`badge-${variant}`] || ""} 
        ${isActive ? styles[`badge-${variant}-active`] : ""} 
        ${disabled ? styles["badge-disabled"] : ""} 
        ${className}
      `, children: children }));
};
export default Badge;
