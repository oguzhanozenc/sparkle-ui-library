import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Page.module.css";
import PageHeader from "./PageHeader";
import PageItem from "./PageItem";
import PageSnippet from "./PageSnippet";
const Page = ({ children }) => {
    return _jsx("div", { className: styles.page, children: children });
};
Page.Header = PageHeader;
Page.Item = PageItem;
Page.Snippet = PageSnippet;
export default Page;
