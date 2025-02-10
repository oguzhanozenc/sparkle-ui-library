import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Sidebar.module.css";
const SidebarHeader = ({ title, subtitle, icon, className = "", }) => {
    return (_jsxs("div", { className: `${styles.sidebarHeader} ${className}`, children: [icon && _jsx("div", { className: styles.sidebarHeaderIcon, children: icon }), _jsxs("div", { className: styles.sidebarHeaderText, children: [_jsx("h3", { children: title }), subtitle && _jsx("span", { children: subtitle })] })] }));
};
export default SidebarHeader;
