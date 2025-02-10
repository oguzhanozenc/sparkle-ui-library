import React, { ReactNode } from "react";
import styles from "./Page.module.css";

type PageHeaderProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: ReactNode;
  size?: "large" | "medium" | "small";
  type?: "success" | "error" | "primary" | "warning";
};

const PageHeader = ({
  title,
  subtitle,
  description,
  icon,
  children,
  size = "medium",
  type = "primary",
}: PageHeaderProps) => {
  const sizeClass =
    styles[`pageHeader${size.charAt(0).toUpperCase() + size.slice(1)}`];
  const typeClass =
    styles[`pageHeader${type.charAt(0).toUpperCase() + type.slice(1)}`];

  if (children) {
    return (
      <header className={`${styles.pageHeader} ${sizeClass} ${typeClass}`}>
        {children}
      </header>
    );
  }

  return (
    <header className={`${styles.pageHeader} ${sizeClass} ${typeClass}`}>
      <div className={styles.headerTitleWrapper}>
        {icon && <div className={styles.headerIcon}>{icon}</div>}
        {title && <h1 className={styles.headerTitle}>{title}</h1>}
      </div>
      {subtitle && <p className={styles.headerSubtitle}>{subtitle}</p>}
      {description && (
        <small className={styles.headerSlogan}>{description}</small>
      )}
    </header>
  );
};

export default PageHeader;
