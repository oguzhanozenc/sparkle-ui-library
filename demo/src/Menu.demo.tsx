import { Link } from "react-router-dom";
import Page from "./Page";
import Menu from "../../src/lib/Menu";

export default function MenuDemo() {
  const codeSnippet = `
import { Menu } from 'sparkle-ui-library';
import { Link } from 'react-router-dom';

export default function Example() {
  return (
    <Menu
      onOpen={(isOpen) =>
        console.log("Menu is", isOpen ? "open" : "closed")
      }
    >
      <Menu.Button>Toggle Menu</Menu.Button>
      <Menu.Dropdown>
        <Link to="/home"><Menu.Item>Home</Menu.Item></Link>
        <Link to="/about"><Menu.Item>About</Menu.Item></Link>
        <Link to="/contact"><Menu.Item>Contact</Menu.Item></Link>
        <Menu.Item onClick={() => alert("Logging out...")}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}`;

  return (
    <Page>
      <Page.Header
        title="Menu Component"
        subtitle="The Menu component displays a dropdown menu with multiple items."
      />

      <Page.Item>
        <h2>Example Usage</h2>
        <div className="page-item-content">
          <Menu
            onOpen={(isOpen) =>
              console.log("Menu is", isOpen ? "open" : "closed")
            }
          >
            <Menu.Button>Toggle Menu</Menu.Button>
            <Menu.Dropdown>
              <Link to="/home">
                <Menu.Item>Home</Menu.Item>
              </Link>
              <Link to="/about">
                <Menu.Item>About</Menu.Item>
              </Link>
              <Link to="/contact">
                <Menu.Item>Contact</Menu.Item>
              </Link>
              <Menu.Item onClick={() => alert("Logging out...")}>
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
