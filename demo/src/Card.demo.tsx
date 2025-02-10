import Page from "./Page";
import Card from "../../src/lib/Card";
import Button from "../../src/lib/Button";

export default function CardDemo() {
  const codeSnippet = `
import { Card, Button } from 'sparkle-ui-library';

export default function Example() {
  return (
    <Card>
      <Card.Header title="Dashboard" subtitle="Activity Overview" />
      <Card.Body>
        <p>Here is the card body content!</p>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline" size="small">
          Explore
        </Button>
      </Card.Footer>
    </Card>
  );
}`;

  return (
    <Page>
      <Page.Header
        title="Card Component"
        subtitle="The Card component is used to group related content together."
      />

      <Page.Item>
        <h2>Example Usage</h2>
        <div className="page-item-content">
          <Card>
            <Card.Header title="Dashboard" subtitle="Activity Overview" />
            <Card.Body>
              <p>Here is the card body content!</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline" size="small">
                Explore
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
