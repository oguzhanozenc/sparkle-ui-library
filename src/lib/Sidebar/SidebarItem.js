import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Sidebar.module.css";
const SidebarItem = ({ icon, nested = false, isActive = false, onClick, children, }) => {
    return (_jsxs("div", { className: `${styles.sidebarItem} ${nested ? styles.sidebarItemNested : ""} ${isActive ? styles.sidebarItemActive : ""}`, onClick: onClick, children: [icon && _jsx("div", { className: styles.icon, children: icon }), _jsx("span", { className: styles.label, children: children })] }));
};
export default SidebarItem;
