import { useState } from "react";
import styles from "./Avatar.module.css";

type AvatarImageProps = {
  src: string;
  alt?: string;
  fallbackSrc?: string;
  className?: string;
};

const AvatarImage = ({
  src,
  alt = "Avatar",
  fallbackSrc = "/fallback-avatar.png",
  className = "",
}: AvatarImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc(fallbackSrc);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${styles.avatarImage} ${className}`}
      onError={handleError}
    />
  );
};

export default AvatarImage;
