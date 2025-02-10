import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Page.module.css";
const PageHeader = ({ title, subtitle, description, icon, children, size = "medium", type = "primary", }) => {
    const sizeClass = styles[`pageHeader${size.charAt(0).toUpperCase() + size.slice(1)}`];
    const typeClass = styles[`pageHeader${type.charAt(0).toUpperCase() + type.slice(1)}`];
    if (children) {
        return (_jsx("header", { className: `${styles.pageHeader} ${sizeClass} ${typeClass}`, children: children }));
    }
    return (_jsxs("header", { className: `${styles.pageHeader} ${sizeClass} ${typeClass}`, children: [_jsxs("div", { className: styles.headerTitleWrapper, children: [icon && _jsx("div", { className: styles.headerIcon, children: icon }), title && _jsx("h1", { className: styles.headerTitle, children: title })] }), subtitle && _jsx("p", { className: styles.headerSubtitle, children: subtitle }), description && (_jsx("small", { className: styles.headerSlogan, children: description }))] }));
};
export default PageHeader;
