import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Sidebar.module.css";
const SidebarSection = ({ title, children }) => {
    return (_jsxs("div", { className: styles.sidebarSection, children: [title && _jsx("h4", { className: styles.sectionTitle, children: title }), children] }));
};
export default SidebarSection;
