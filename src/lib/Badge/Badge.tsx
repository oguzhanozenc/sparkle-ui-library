import styles from "./Badge.module.css";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  variant?: "default" | "primary" | "success" | "warning" | "error";
  disabled?: boolean;
};

const Badge = ({
  children,
  className = "",
  isActive = false,
  variant = "default",
  disabled = false,
}: BadgeProps) => {
  return (
    <span
      className={`
        ${styles.badge} 
        ${styles[`badge-${variant}`] || ""} 
        ${isActive ? styles[`badge-${variant}-active`] : ""} 
        ${disabled ? styles["badge-disabled"] : ""} 
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
