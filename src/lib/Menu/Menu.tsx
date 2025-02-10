import React, { createContext, useContext } from "react";
import useToggle from "../../hooks/useToggle";
import styles from "./Menu.module.css";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";

type MenuContextType = {
  open: boolean;
  toggleOpen: () => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

type MenuProps = {
  children: React.ReactNode;
  onOpen?: (isOpen: boolean) => void;
};

const Menu = ({ children, onOpen }: MenuProps) => {
  const [open, toggleOpen] = useToggle(false, onOpen);

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className={styles.menuContainer}>{children}</div>
    </MenuContext.Provider>
  );
};

Menu.Button = MenuButton;
Menu.Dropdown = MenuDropdown;
Menu.Item = MenuItem;

export default Menu;
