import styles from "./Avatar.module.css";

type AvatarTextProps = {
  children: string;
  className?: string;
};

const AvatarText = ({ children, className = "" }: AvatarTextProps) => {
  const initials = children
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span className={`${styles.avatarText} ${className}`}>{initials}</span>
  );
};

export default AvatarText;
