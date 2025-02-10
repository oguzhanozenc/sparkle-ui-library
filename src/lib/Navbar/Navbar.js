import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";
const Navbar = ({ children, className = "" }) => {
    return (_jsx("nav", { className: `${styles.navbar} ${className}`, children: _jsx("div", { className: styles.navbarMenu, children: children }) }));
};
Navbar.Item = NavbarItem;
export default Navbar;
