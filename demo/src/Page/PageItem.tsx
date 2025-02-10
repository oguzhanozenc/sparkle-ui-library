import { ReactNode } from "react";
import styles from "./Page.module.css";

type PageItemProps = {
  children: ReactNode;
};

const PageItem = ({ children }: PageItemProps) => {
  return <div className={styles.pageItem}>{children}</div>;
};

export default PageItem;
