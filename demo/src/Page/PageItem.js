import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Page.module.css";
const PageItem = ({ children }) => {
    return _jsx("div", { className: styles.pageItem, children: children });
};
export default PageItem;
