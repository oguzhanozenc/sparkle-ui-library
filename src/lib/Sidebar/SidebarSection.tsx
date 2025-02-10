import React from "react";
import styles from "./Sidebar.module.css";

export type SidebarSectionProps = {
  title?: string;
  children: React.ReactNode;
};

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <div className={styles.sidebarSection}>
      {title && <h4 className={styles.sectionTitle}>{title}</h4>}
      {children}
    </div>
  );
};

export default SidebarSection;
