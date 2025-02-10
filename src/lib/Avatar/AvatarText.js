import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Avatar.module.css";
const AvatarText = ({ children, className = "" }) => {
    const initials = children
        .split(" ")
        .filter(Boolean)
        .map((word) => word.charAt(0))
        .slice(0, 2)
        .join("")
        .toUpperCase();
    return (_jsx("span", { className: `${styles.avatarText} ${className}`, children: initials }));
};
export default AvatarText;
