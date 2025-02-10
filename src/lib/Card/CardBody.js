import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Card.module.css";
const CardBody = ({ children, className }) => {
    return (_jsx("div", { className: `${styles.cardBody} ${className || ""}`, children: children }));
};
export default CardBody;
