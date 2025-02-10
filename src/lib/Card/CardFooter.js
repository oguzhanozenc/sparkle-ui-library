import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Card.module.css";
const CardFooter = ({ children, className }) => {
    return (_jsx("div", { className: `${styles.cardFooter} ${className || ""}`, children: children }));
};
export default CardFooter;
