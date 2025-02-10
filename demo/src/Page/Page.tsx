import { ReactNode } from "react";
import styles from "./Page.module.css";
import PageHeader from "./PageHeader";
import PageItem from "./PageItem";
import PageSnippet from "./PageSnippet";

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return <div className={styles.page}>{children}</div>;
};

Page.Header = PageHeader;
Page.Item = PageItem;
Page.Snippet = PageSnippet;

export default Page;
