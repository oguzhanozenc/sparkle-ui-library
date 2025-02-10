import React from "react";
import styles from "./Card.module.css";

export type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
};

const CardFooter = ({ children, className }: CardFooterProps) => {
  return (
    <div className={`${styles.cardFooter} ${className || ""}`}>{children}</div>
  );
};

export default CardFooter;
