import Page from "./Page";
import { ToggleSwitch } from "sparkle-ui-library";

export default function ToggleSwitchDemo() {
  const codeSnippet = `
import { ToggleSwitch } from 'sparkle-ui-library';

export default function Example() {
  return <ToggleSwitch />;
}`;

  return (
    <Page>
      <Page.Header
        title="ToggleSwitch Component"
        subtitle="The ToggleSwitch component is used to toggle between two states."
      />

      <Page.Item>
        <h2>Example Usage</h2>
        <div className="page-item-content">
          <ToggleSwitch />
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
