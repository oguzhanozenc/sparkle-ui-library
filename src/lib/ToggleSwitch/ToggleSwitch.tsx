import useToggle from "../../hooks/useToggle";
import styles from "./ToggleSwitch.module.css";

export type ToggleSwitchProps = {
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
};

const ToggleSwitch = ({ onChange, disabled = false }: ToggleSwitchProps) => {
  const [isOn, toggle] = useToggle(false, onChange);

  return (
    <div
      className={`${styles.toggleSwitch} ${isOn ? styles.on : ""} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={!disabled ? toggle : undefined}
    >
      <div className={styles.toggleKnob}></div>
    </div>
  );
};

export default ToggleSwitch;
