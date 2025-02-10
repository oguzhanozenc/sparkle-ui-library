import React from "react";
import styles from "./Card.module.css";

export type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

const CardBody = ({ children, className }: CardBodyProps) => {
  return (
    <div className={`${styles.cardBody} ${className || ""}`}>{children}</div>
  );
};

export default CardBody;
