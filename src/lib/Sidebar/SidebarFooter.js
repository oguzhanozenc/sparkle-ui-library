import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TbSettings } from "react-icons/tb";
import styles from "./Sidebar.module.css";
const SidebarFooter = ({ avatar, name, email, dropdown, children, }) => {
    if (children) {
        return _jsx("div", { className: styles.sidebarFooter, children: children });
    }
    return (_jsxs("div", { className: styles.sidebarFooter, children: [avatar && _jsx("div", { className: styles.footerAvatar, children: avatar }), _jsxs("div", { className: styles.footerText, children: [name && _jsx("div", { className: styles.footerName, children: name }), email && _jsx("div", { className: styles.footerEmail, children: email })] }), _jsx("div", {}), dropdown ?? _jsx(TbSettings, { className: styles.footerDropdown })] }));
};
export default SidebarFooter;
