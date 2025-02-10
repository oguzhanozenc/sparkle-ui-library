import React from "react";
import styles from "./Sidebar.module.css";

export type SidebarHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
};

const SidebarHeader = ({
  title,
  subtitle,
  icon,
  className = "",
}: SidebarHeaderProps) => {
  return (
    <div className={`${styles.sidebarHeader} ${className}`}>
      {icon && <div className={styles.sidebarHeaderIcon}>{icon}</div>}
      <div className={styles.sidebarHeaderText}>
        <h3>{title}</h3>
        {subtitle && <span>{subtitle}</span>}
      </div>
    </div>
  );
};

export default SidebarHeader;
