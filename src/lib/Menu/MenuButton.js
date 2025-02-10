import { jsx as _jsx } from "react/jsx-runtime";
import { useMenuContext } from "./Menu";
import styles from "./Menu.module.css";
const MenuButton = ({ children, size = "medium" }) => {
    const { toggleOpen } = useMenuContext();
    return (_jsx("button", { className: `${styles.menuButton} ${styles[`menuButton-${size}`]}`, onClick: toggleOpen, children: children }));
};
export default MenuButton;
