import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import useToggle from "../../hooks/useToggle";
import styles from "./Menu.module.css";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";
const MenuContext = createContext(undefined);
export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenuContext must be used within a MenuProvider");
    }
    return context;
};
const Menu = ({ children, onOpen }) => {
    const [open, toggleOpen] = useToggle(false, onOpen);
    return (_jsx(MenuContext.Provider, { value: { open, toggleOpen }, children: _jsx("div", { className: styles.menuContainer, children: children }) }));
};
Menu.Button = MenuButton;
Menu.Dropdown = MenuDropdown;
Menu.Item = MenuItem;
export default Menu;
