import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./Avatar.module.css";
const AvatarImage = ({ src, alt = "Avatar", fallbackSrc = "/fallback-avatar.png", className = "", }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const handleError = () => {
        setImageSrc(fallbackSrc);
    };
    return (_jsx("img", { src: imageSrc, alt: alt, className: `${styles.avatarImage} ${className}`, onError: handleError }));
};
export default AvatarImage;
