import styles from "./Card.module.css";

export type CardHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
};

const CardHeader = ({ title, subtitle, icon, className }: CardHeaderProps) => {
  return (
    <div className={`${styles.cardHeader} ${className || ""}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div>
        <h3 className={styles.cardTitle}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default CardHeader;
