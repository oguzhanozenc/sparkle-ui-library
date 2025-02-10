import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./Navbar.module.css";
const NavbarItem = ({ icon, label, isActive = false, onClick, className = "", }) => {
    const [hovered, setHovered] = useState(false);
    return (_jsxs("div", { className: `${styles.navLink} ${className} ${isActive ? styles.navLinkActive : ""}`, onClick: onClick, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: [icon, hovered && _jsx("span", { className: styles.hoveredText, children: label })] }));
};
export default NavbarItem;
