import Page from "./Page";
import Button from "../../src/lib/Button/Button";

export default function ButtonDemo() {
  const codeSnippet = `
import { Button } from 'sparkle-ui-library';

export default function Example() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline" disabled>Disabled Button</Button>
      <Button variant="outline" loading>Loading Button</Button>
    </>
  );
}`;

  return (
    <Page>
      <Page.Header
        title="Button Component"
        subtitle="Explore the versatile button component for various actions."
      />

      <Page.Item>
        <h2>Variants</h2>
        <div className="page-item-content">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>{" "}
          <Button variant="outline" disabled>
            Disabled Button
          </Button>
          <span>Loading: </span>
          <Button variant="outline" loading>
            Loading Button
          </Button>{" "}
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
