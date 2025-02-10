import React from "react";
import { useMenuContext } from "./Menu";
import styles from "./Menu.module.css";

type MenuDropdownProps = {
  children: React.ReactNode;
};

const MenuDropdown = ({ children }: MenuDropdownProps) => {
  const { open } = useMenuContext();

  return open ? <div className={styles.menuDropdown}>{children}</div> : null;
};

export default MenuDropdown;
