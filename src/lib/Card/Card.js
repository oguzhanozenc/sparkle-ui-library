import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Card.module.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
const Card = ({ children, className }) => {
    return _jsx("div", { className: `${styles.card} ${className || ""}`, children: children });
};
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
export default Card;
