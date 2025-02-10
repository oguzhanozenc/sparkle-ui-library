import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        ${styles.button} 
        ${styles[`button-${variant}`]} 
        ${styles[`button-${size}`]} 
        ${disabled ? styles["button-disabled"] : ""} 
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className={styles.loader}></span> : children}
    </button>
  );
};

export default Button;
