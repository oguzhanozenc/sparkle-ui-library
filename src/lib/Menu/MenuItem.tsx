import React from "react";
import styles from "./Menu.module.css";

type MenuItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const MenuItem = ({ children, onClick }: MenuItemProps) => {
  return (
    <div className={styles.menuItem} onClick={onClick}>
      {children}
    </div>
  );
};

export default MenuItem;
