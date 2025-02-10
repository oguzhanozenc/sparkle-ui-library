import { jsx as _jsx } from "react/jsx-runtime";
import useToggle from "../../hooks/useToggle";
import styles from "./ToggleSwitch.module.css";
const ToggleSwitch = ({ onChange, disabled = false }) => {
    const [isOn, toggle] = useToggle(false, onChange);
    return (_jsx("div", { className: `${styles.toggleSwitch} ${isOn ? styles.on : ""} ${disabled ? styles.disabled : ""}`, onClick: !disabled ? toggle : undefined, children: _jsx("div", { className: styles.toggleKnob }) }));
};
export default ToggleSwitch;
