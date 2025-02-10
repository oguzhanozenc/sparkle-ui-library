import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Avatar.module.css";
import AvatarImage from "./AvatarImage";
import AvatarText from "./AvatarText";
const Avatar = ({ children, size = "medium", className = "" }) => {
    const sizeClass = {
        small: styles["avatar-small"],
        medium: styles["avatar-medium"],
        large: styles["avatar-large"],
    }[size];
    return (_jsx("div", { className: `${styles.avatar} ${sizeClass} ${className}`, children: children }));
};
Avatar.Image = AvatarImage;
Avatar.Text = AvatarText;
export default Avatar;
