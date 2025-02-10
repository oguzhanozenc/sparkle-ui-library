import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";
import SidebarSection from "./SidebarSection";
import Button from "../Button/Button";
import { TbChevronsLeft, TbChevronsRight } from "react-icons/tb";

export type SidebarProps = {
  children: React.ReactNode;
  className?: string;
};

const Sidebar = ({ children, className = "" }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);

      if (mobileView) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`${styles.sidebarContainer} ${isMobile ? styles.mobile : ""}`}
    >
      <div
        className={`${styles.sidebar} ${
          isCollapsed ? styles.sidebarCollapsed : styles.sidebarExpanded
        } ${className}`}
      >
        {children}
      </div>
      <Button
        variant="ghost"
        size="small"
        className={styles.toggleBtn}
        onClick={toggleSidebar}
        aria-expanded={!isCollapsed}
        aria-label="Toggle Sidebar"
      >
        {isCollapsed ? (
          <TbChevronsRight size={15} />
        ) : (
          <TbChevronsLeft size={15} />
        )}
      </Button>
    </div>
  );
};

Sidebar.Header = SidebarHeader;
Sidebar.Item = SidebarItem;
Sidebar.Footer = SidebarFooter;
Sidebar.Section = SidebarSection;

export default Sidebar;
