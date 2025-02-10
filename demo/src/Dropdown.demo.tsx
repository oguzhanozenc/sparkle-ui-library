import Page from "./Page";
import { Dropdown } from "sparkle-ui-library";

export default function DropdownShowcase() {
  const codeSnippet = `
import { Dropdown } from 'sparkle-ui-library';

export default function Example() {
  return (
    <Dropdown
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Disabled Option", value: "3", disabled: true },
      ]}
      placeholder="Select an option"
    />
  );
}`;

  return (
    <Page>
      <Page.Header
        title="Dropdown Component"
        subtitle="The Dropdown component allows users to select an option from a list."
      />

      <Page.Item>
        <h2>Example Usage</h2>
        <div className="page-item-content">
          <Dropdown
            options={[
              { label: "Option 1", value: "1" },
              { label: "Option 2", value: "2" },
              { label: "Disabled Option", value: "3", disabled: true },
            ]}
            placeholder="Select an option"
          />
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
