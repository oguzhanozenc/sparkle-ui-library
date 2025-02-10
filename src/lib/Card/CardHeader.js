import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Card.module.css";
const CardHeader = ({ title, subtitle, icon, className }) => {
    return (_jsxs("div", { className: `${styles.cardHeader} ${className || ""}`, children: [icon && _jsx("div", { className: styles.icon, children: icon }), _jsxs("div", { children: [_jsx("h3", { className: styles.cardTitle, children: title }), subtitle && _jsx("p", { className: styles.subtitle, children: subtitle })] })] }));
};
export default CardHeader;
