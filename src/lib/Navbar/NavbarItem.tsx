import React, { useState } from "react";
import styles from "./Navbar.module.css";

type NavbarItemProps = {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
};

const NavbarItem = ({
  icon,
  label,
  isActive = false,
  onClick,
  className = "",
}: NavbarItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.navLink} ${className} ${
        isActive ? styles.navLinkActive : ""
      }`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
      {hovered && <span className={styles.hoveredText}>{label}</span>}
    </div>
  );
};

export default NavbarItem;
