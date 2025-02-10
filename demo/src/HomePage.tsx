import Page from "./Page";
import SparkleIcon from "./SparkleIcon";
import "./HomePage.css";

export default function HomePage() {
  return (
    <Page>
      <Page.Header
        title="Sparkle."
        size="large"
        type="success"
        subtitle="An aesthetic UI Component Library."
        description="The one with the magic, the one with the Sparkle."
        icon={<SparkleIcon />}
      />
      <Page.Item>
        <h2>About</h2>
        Sparkle began as a personal project to explore reusable components and
        better understand modern UI patterns. Named after one of my favorite
        songs, it’s inspired by various modern design systems, including the{" "}
        <a
          href="https://vercel.com/design/geist"
          target="_blank"
          rel="noopener noreferrer"
          className="geist-link"
        >
          Geist Design System
        </a>{" "}
        from the Vercel team. Sparkle is an independently developed library,
        designed to bring beauty, functionality, and simplicity to your user
        interfaces.
      </Page.Item>
      <br />
      <Page.Item>
        <h2>Highlights</h2>
        Modern and aesthetic design: Inspired by leading design systems.
      </Page.Item>
      <Page.Item>
        Reusable and customizable: Components are fully accessible and easy to
        tweak.
      </Page.Item>
      <Page.Item>
        React and TypeScript: Seamless integration and type safety for
        developers.
      </Page.Item>
      <Page.Item>
        Developer-focused: Built with simplicity and flexibility in mind.
      </Page.Item>
      <br />
      <Page.Item>
        <br />
        <Page.Item>
          <h2>Getting Started</h2>
          <p>
            Sparkle is designed to simplify the process of building beautiful
            and accessible user interfaces. Here’s how to get started:
          </p>
        </Page.Item>
        <br />
      </Page.Item>
      <Page.Snippet>
        {`# Install Sparkle
npm install sparkle-ui-library

# Import and use a component
import { Button } from 'sparkle-ui-library';

export default function App() {
  return <Button variant="primary">Click Me</Button>;
}`}
      </Page.Snippet>
    </Page>
  );
}
