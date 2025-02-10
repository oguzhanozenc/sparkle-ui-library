import { ReactNode, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "../../../src/lib/Button/Button";
import styles from "./Page.module.css";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

type PageSnippetProps = {
  children: ReactNode;
  language?: string;
};

const PageSnippet = ({
  children,
  language = "javascript",
}: PageSnippetProps) => {
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

  return (
    <div className={styles.pageSnippet}>
      <div className={styles.snippetHeader}>
        <Button
          variant="outline"
          size="medium"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? (
            <>
              <TbChevronUp /> Hide Code
            </>
          ) : (
            <>
              <TbChevronDown /> Show Code
            </>
          )}
        </Button>
      </div>
      {isVisible && (
        <div className={styles.codeContainer}>
          <div className={styles.codeHeader}>
            <Button
              variant="outline"
              size="medium"
              className={styles.copyBtn}
              onClick={copyToClipboard}
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
          <SyntaxHighlighter language={language} style={dracula}>
            {typeof children === "string" ? children : String(children)}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default PageSnippet;
