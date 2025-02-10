import React from "react";
import styles from "./Sidebar.module.css";

export type SidebarItemProps = {
  icon?: React.ReactNode;
  nested?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

const SidebarItem = ({
  icon,
  nested = false,
  isActive = false,
  onClick,
  children,
}: SidebarItemProps) => {
  return (
    <div
      className={`${styles.sidebarItem} ${
        nested ? styles.sidebarItemNested : ""
      } ${isActive ? styles.sidebarItemActive : ""}`}
      onClick={onClick}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <span className={styles.label}>{children}</span>
    </div>
  );
};

export default SidebarItem;
