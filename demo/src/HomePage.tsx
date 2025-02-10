import Page from "./Page";
import SparkleIcon from "./SparkleIcon";
import { TbDownload } from "react-icons/tb";
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
        <ul>
          <li>
            Modern and aesthetic design: Inspired by leading design systems.
          </li>
          <li>
            Reusable and customizable: Components are fully accessible and easy
            to tweak.
          </li>
          <li>
            React and TypeScript: Seamless integration and type safety for
            developers.
          </li>
          <li>
            Developer-focused: Built with simplicity and flexibility in mind.
          </li>
        </ul>
      </Page.Item>

      <br />
      <Page.Item>
        <h2>Getting Started</h2>
        <p>
          Sparkle is designed to simplify the process of building beautiful and
          accessible user interfaces. Follow these steps to integrate Sparkle
          into your project:
        </p>{" "}
        <br />
        <h3>
          {" "}
          <TbDownload /> Installation
        </h3>
        <p>
          Use <strong>npm</strong> or <strong>yarn</strong> to install Sparkle
          UI Library:
        </p>
        <Page.Snippet>{`# Using npm
npm install sparkle-ui-library

# Using Yarn
yarn add sparkle-ui-library`}</Page.Snippet>
        <p>
          Ensure you have <code>react</code> and <code>react-dom</code>{" "}
          installed in your project as peer dependencies.
        </p>
        <br />
        <h3> Basic Usage</h3>
        <p>
          Once installed, you can start using Sparkle components immediately.
          Here's a simple example:
        </p>
        <Page.Snippet>
          {`import { Button, Avatar } from 'sparkle-ui-library';

export default function App() {
  return (
    <div>
      <Button variant="primary" size="large">
        Click Me
      </Button>
      <Avatar size="medium">
        <Avatar.Text>JD</Avatar.Text>
      </Avatar>
    </div>
  );
}`}
        </Page.Snippet>
        <p>
          For more components and customization options, explore the live demo
          from the sidebar.
        </p>
      </Page.Item>
    </Page>
  );
}
