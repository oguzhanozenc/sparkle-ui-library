import React from "react";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";

type NavbarProps = {
  children: React.ReactNode;
  className?: string;
};

const Navbar = ({ children, className = "" }: NavbarProps) => {
  return (
    <nav className={`${styles.navbar} ${className}`}>
      <div className={styles.navbarMenu}>{children}</div>
    </nav>
  );
};

Navbar.Item = NavbarItem;

export default Navbar;
