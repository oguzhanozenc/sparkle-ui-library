import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Menu.module.css";
const MenuItem = ({ children, onClick }) => {
    return (_jsx("div", { className: styles.menuItem, onClick: onClick, children: children }));
};
export default MenuItem;
