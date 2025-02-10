import Page from "./Page";
import Badge from "../../src/lib/Badge";

export default function BadgeDemo() {
  const codeSnippet = `
import { Badge } from 'sparkle-ui-library';

export default function Example() {
  return (
    <>
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </>
  );
}`;

  return (
    <Page>
      <Page.Header
        title="Badge Component"
        subtitle="The Badge component is used to highlight information or status."
      />

      <Page.Item>
        <h2>Variants</h2>
        <div className="page-item-content">
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
