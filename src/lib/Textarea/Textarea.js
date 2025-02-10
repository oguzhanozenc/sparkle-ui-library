import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Textarea.module.css";
const Textarea = ({ placeholder, value, onChange, resize = "vertical", maxLength, showCounter = false, error = false, }) => {
    return (_jsxs("div", { className: `${styles.textareaWrapper} ${error ? styles.error : ""}`, children: [_jsx("textarea", { className: `${styles.textarea} ${resize !== "vertical" ? styles[`textarea-${resize}`] : ""}`, placeholder: placeholder, value: value, onChange: onChange, maxLength: maxLength }), showCounter && maxLength && (_jsxs("div", { className: styles.counter, children: [value?.length || 0, "/", maxLength] }))] }));
};
export default Textarea;
