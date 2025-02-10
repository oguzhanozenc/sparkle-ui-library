import Page from "./Page";
import Textarea from "../../src/lib/Textarea";

export default function TextareaDemo() {
  const codeSnippet = `
import { Textarea } from 'sparkle-ui-library';

export default function Example() {
  return <Textarea placeholder="Type something..." />;
}`;

  return (
    <Page>
      <Page.Header
        title="Textarea Component"
        subtitle="The Textarea component allows users to input multiline text."
      />

      <Page.Item>
        <h2>Example Usage</h2>
        <div className="page-item-content">
          <Textarea placeholder="Type something..." />
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
