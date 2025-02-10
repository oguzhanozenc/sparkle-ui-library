import Page from "./Page";
import Input from "../../src/lib/Input/Input";

export default function InputDemo() {
  const codeSnippet = `
import { Input } from 'sparkle-ui-library';

export default function Example() {
  return (
    <>
      <Input placeholder="Type something..." />
      <Input placeholder="With Prefix" prefix="@" />
      <Input placeholder="Error State" error />
    </>
  );
}`;

  return (
    <Page>
      <Page.Header
        title="Input Component"
        subtitle="The Input component allows users to enter text."
      />

      <Page.Item>
        <h2>Example Usage</h2>
        <div className="page-item-content">
          <Input placeholder="Type something..." />
          <Input placeholder="With Prefix" prefix="@" />
          <Input placeholder="Error State" error />
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
