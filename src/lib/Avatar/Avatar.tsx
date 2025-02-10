import styles from "./Avatar.module.css";
import AvatarImage from "./AvatarImage";
import AvatarText from "./AvatarText";

type AvatarProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
};

const Avatar = ({ children, size = "medium", className = "" }: AvatarProps) => {
  const sizeClass = {
    small: styles["avatar-small"],
    medium: styles["avatar-medium"],
    large: styles["avatar-large"],
  }[size];

  return (
    <div className={`${styles.avatar} ${sizeClass} ${className}`}>
      {children}
    </div>
  );
};

Avatar.Image = AvatarImage;
Avatar.Text = AvatarText;

export default Avatar;
