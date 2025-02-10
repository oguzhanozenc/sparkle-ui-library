import { jsx as _jsx } from "react/jsx-runtime";
import { useMenuContext } from "./Menu";
import styles from "./Menu.module.css";
const MenuDropdown = ({ children }) => {
    const { open } = useMenuContext();
    return open ? _jsx("div", { className: styles.menuDropdown, children: children }) : null;
};
export default MenuDropdown;
