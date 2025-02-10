import React from "react";
import { TbSettings } from "react-icons/tb";
import styles from "./Sidebar.module.css";

export type SidebarFooterProps = {
  avatar?: React.ReactNode;
  name?: string;
  email?: string;
  dropdown?: React.ReactNode;
  children?: React.ReactNode;
};

const SidebarFooter = ({
  avatar,
  name,
  email,
  dropdown,
  children,
}: SidebarFooterProps) => {
  if (children) {
    return <div className={styles.sidebarFooter}>{children}</div>;
  }

  return (
    <div className={styles.sidebarFooter}>
      {avatar && <div className={styles.footerAvatar}>{avatar}</div>}
      <div className={styles.footerText}>
        {name && <div className={styles.footerName}>{name}</div>}
        {email && <div className={styles.footerEmail}>{email}</div>}
      </div>
      <div></div>
      {dropdown ?? <TbSettings className={styles.footerDropdown} />}
    </div>
  );
};

export default SidebarFooter;
