import React, { useState } from "react";
import styles from "./Sidebar.module.css";

export type DropdownItem = {
  label: string;
  onClick?: () => void;
};

export type SidebarFooterProps = {
  avatar?: React.ReactNode;
  name?: string;
  email?: string;
  dropdownItems?: DropdownItem[];
  children?: React.ReactNode;
};

const SidebarFooter = ({
  avatar,
  name,
  email,
  dropdownItems,
  children,
}: SidebarFooterProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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

      <div className={styles.footerDropdown}>
        <span onClick={toggleDropdown} role="button" aria-label="Open Dropdown">
          &#9881;
        </span>

        {isDropdownOpen && dropdownItems && (
          <ul className={styles.dropdownMenu}>
            {dropdownItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  item.onClick && item.onClick();
                  setIsDropdownOpen(false);
                }}
                className={styles.dropdownItem}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SidebarFooter;
