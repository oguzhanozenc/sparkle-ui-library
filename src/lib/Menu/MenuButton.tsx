import { useMenuContext } from "./Menu";
import styles from "./Menu.module.css";

type MenuButtonProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
};

const MenuButton = ({ children, size = "medium" }: MenuButtonProps) => {
  const { toggleOpen } = useMenuContext();

  return (
    <button
      className={`${styles.menuButton} ${styles[`menuButton-${size}`]}`}
      onClick={toggleOpen}
    >
      {children}
    </button>
  );
};

export default MenuButton;
