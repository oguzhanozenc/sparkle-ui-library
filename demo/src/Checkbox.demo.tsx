import Page from "./Page";
import { Checkbox } from "sparkle-ui-library";

export default function CheckboxShowcase() {
  const codeSnippet = `
import { Checkbox } from 'sparkle-ui-library';

export default function Example() {
  return (
    <>
      <Checkbox label="Remember me" />
      <Checkbox label="Subscribe to newsletter" />
    </>
  );
}`;

  return (
    <Page>
      <Page.Header
        title="Checkbox Component"
        subtitle="The Checkbox component allows users to make binary choices."
      />

      <Page.Item>
        <h2>Example Usage</h2>
        <div className="page-item-content">
          <Checkbox label="Remember me" />
          <Checkbox label="Subscribe to newsletter" />
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
