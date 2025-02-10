import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./Sidebar.module.css";
const SidebarFooter = ({ avatar, name, email, dropdownItems, children, }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    if (children) {
        return _jsx("div", { className: styles.sidebarFooter, children: children });
    }
    return (_jsxs("div", { className: styles.sidebarFooter, children: [avatar && _jsx("div", { className: styles.footerAvatar, children: avatar }), _jsxs("div", { className: styles.footerText, children: [name && _jsx("div", { className: styles.footerName, children: name }), email && _jsx("div", { className: styles.footerEmail, children: email })] }), _jsxs("div", { className: styles.footerDropdown, children: [_jsx("span", { onClick: toggleDropdown, role: "button", "aria-label": "Open Dropdown", children: "\u2699" }), isDropdownOpen && dropdownItems && (_jsx("ul", { className: styles.dropdownMenu, children: dropdownItems.map((item, index) => (_jsx("li", { onClick: () => {
                                item.onClick && item.onClick();
                                setIsDropdownOpen(false);
                            }, className: styles.dropdownItem, children: item.label }, index))) }))] })] }));
};
export default SidebarFooter;
