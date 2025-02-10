import {
  jsx as _jsx,
  Fragment as _Fragment,
  jsxs as _jsxs,
} from "react/jsx-runtime";
import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "../../../src/lib/Button/Button";
import styles from "./Page.module.css";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
const PageSnippet = ({ children, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const copyToClipboard = () => {
    if (!children) return;
    const codeText = typeof children === "string" ? children : String(children);
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return _jsxs("div", {
    className: styles.pageSnippet,
    children: [
      _jsx("div", {
        className: styles.snippetHeader,
        children: _jsx(Button, {
          variant: "outline",
          size: "medium",
          onClick: () => setIsVisible((prev) => !prev),
          children: isVisible
            ? _jsxs(_Fragment, {
                children: [_jsx(TbChevronUp, {}), " Hide Code"],
              })
            : _jsxs(_Fragment, {
                children: [_jsx(TbChevronDown, {}), " Show Code"],
              }),
        }),
      }),
      isVisible &&
        _jsxs("div", {
          className: styles.codeContainer,
          children: [
            _jsx("div", {
              className: styles.codeHeader,
              children: _jsx(Button, {
                variant: "outline",
                size: "medium",
                className: styles.copyBtn,
                onClick: copyToClipboard,
                children: copied ? "Copied!" : "Copy",
              }),
            }),
            _jsx(SyntaxHighlighter, {
              language: language,
              style: dracula,
              children:
                typeof children === "string" ? children : String(children),
            }),
          ],
        }),
    ],
  });
};
export default PageSnippet;
