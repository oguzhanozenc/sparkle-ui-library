import { Button } from "sparkle-ui-library";
import {
  TbWorld,
  TbBrandGithub,
  TbPackage,
  TbDownload,
  TbPalette,
  TbTools,
  TbHeart,
} from "react-icons/tb";
import Page from "./Page";

export default function ConfigurationPage() {
  return (
    <Page>
      <Page.Header
        title="Configuration"
        subtitle="Set up, customize, and extend Sparkle UI in your projects."
      />
      <Page.Item>
        <h3>
          <TbDownload style={{ marginRight: "8px", verticalAlign: "middle" }} />
          Installation
        </h3>
        <p>Install Sparkle UI Library in your project using npm:</p>
        <Page.Snippet
          style={{ backgroundColor: "red" }}
        >{`npm install sparkle-ui-library`}</Page.Snippet>
        <p>Alternatively, using Yarn:</p>
        <Page.Snippet>{`yarn add sparkle-ui-library`}</Page.Snippet>
        <p>
          Ensure you have the necessary peer dependencies like React and React
          DOM installed.
        </p>
      </Page.Item>
      <Page.Item>
        <h3>
          <TbPalette style={{ marginRight: "8px", verticalAlign: "middle" }} />
          Customization
        </h3>
        <p>
          Adjust component appearance using props. For example, customize the
          <code> Button </code> variant or size directly:
        </p>
        <Page.Snippet>{`<Button variant="primary" size="large">Click Me</Button>`}</Page.Snippet>
        <p>
          Visit individual component pages in the demo for more usage
          variations.
        </p>
      </Page.Item>
      <Page.Item>
        <h3>
          <TbTools style={{ marginRight: "8px", verticalAlign: "middle" }} />
          Overriding Styles
        </h3>
        <p>
          You can override default styles using inline styles or custom classes:
        </p>
        <Page.Snippet>
          {`<Button variant="secondary" style={{ backgroundColor: '#ff6b81', color: '#fff' }}>
  Custom Styled Button
</Button>

<Button className="my-custom-button">
  Button with Custom Class
</Button>`}
        </Page.Snippet>

        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#ff6b81", color: "#fff" }}
          >
            Custom Styled
          </Button>
          <Button
            className="my-custom-button"
            style={{ border: "2px dashed #0070f3", color: "#0070f3" }}
          >
            Custom Class
          </Button>
        </div>
      </Page.Item>
      <br />{" "}
      <Page.Item>
        <h3>
          <TbHeart style={{ marginRight: "8px", verticalAlign: "middle" }} />
          Support Sparkle
        </h3>
        <p>
          If you find Sparkle useful, consider supporting the project by
          visiting the links below!
        </p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Button variant="ghost" style={linkButtonStyle}>
            <a
              href="https://sparkle-ui-library.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={linkAnchorStyle}
              aria-label="Live Demo"
            >
              <TbWorld size={28} />
            </a>
          </Button>

          <Button variant="ghost" style={linkButtonStyle}>
            <a
              href="https://github.com/oguzhanozenc/sparkle-ui-library"
              target="_blank"
              rel="noopener noreferrer"
              style={linkAnchorStyle}
              aria-label="GitHub Repository"
            >
              <TbBrandGithub size={28} />
            </a>
          </Button>

          <Button variant="ghost" style={linkButtonStyle}>
            <a
              href="https://www.npmjs.com/package/sparkle-ui-library"
              target="_blank"
              rel="noopener noreferrer"
              style={linkAnchorStyle}
              aria-label="npm Package"
            >
              <TbPackage size={28} />
            </a>
          </Button>
        </div>
      </Page.Item>
    </Page>
  );
}

const linkButtonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
  height: "50px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const linkAnchorStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  color: "inherit",
  width: "100%",
  height: "100%",
};
