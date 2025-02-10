import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";
import SidebarSection from "./SidebarSection";
import Button from "../Button/Button";
import { TbChevronsLeft, TbChevronsRight } from "react-icons/tb";
const Sidebar = ({ children, className = "" }) => {
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
    return (_jsxs("div", { className: `${styles.sidebarContainer} ${isMobile ? styles.mobile : ""}`, children: [_jsx("div", { className: `${styles.sidebar} ${isCollapsed ? styles.sidebarCollapsed : styles.sidebarExpanded} ${className}`, children: children }), _jsx(Button, { variant: "ghost", size: "small", className: styles.toggleBtn, onClick: toggleSidebar, "aria-expanded": !isCollapsed, "aria-label": "Toggle Sidebar", children: isCollapsed ? (_jsx(TbChevronsRight, { size: 15 })) : (_jsx(TbChevronsLeft, { size: 15 })) })] }));
};
Sidebar.Header = SidebarHeader;
Sidebar.Item = SidebarItem;
Sidebar.Footer = SidebarFooter;
Sidebar.Section = SidebarSection;
export default Sidebar;
