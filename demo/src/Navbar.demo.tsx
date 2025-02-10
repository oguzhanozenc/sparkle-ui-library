import Page from "./Page";
import Navbar from "../../src/lib/Navbar";
import { Link } from "react-router-dom";
import { TbSmartHome, TbUserCircle, TbMessageChatbot } from "react-icons/tb";
import { IoLayersOutline } from "react-icons/io5";

export default function NavbarDemo() {
  const codeSnippet = `
import { Navbar } from 'sparkle-ui-library';
import { TbSmartHome, TbUserCircle, TbMessageChatbot } from "react-icons/tb";
import { IoLayersOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Example() {
  return (
    <Navbar>
      <Link to="/">
        <Navbar.Item
          icon={<TbSmartHome />}
          label="Home"
          isActive={true}
        />
      </Link>
      <Link to="/about">
        <Navbar.Item
          icon={<TbUserCircle />}
          label="About"
        />
      </Link>
      <Link to="/services">
        <Navbar.Item
          icon={<IoLayersOutline />}
          label="Services"
        />
      </Link>
      <Link to="/contact">
        <Navbar.Item
          icon={<TbMessageChatbot />}
          label="Contact"
        />
      </Link>
    </Navbar>
  );
}`;

  return (
    <Page>
      <Page.Header
        title="Navbar Component"
        subtitle="The Navbar component provides navigation functionality for web
          applications. It supports custom styling and composition with
          Navbar.Item components."
      />

      <Page.Item>
        <h2>Example Usage</h2>
        <div className="page-item-content">
          <Navbar>
            <Link to="/">
              <Navbar.Item
                icon={<TbSmartHome />}
                label="Home"
                isActive={true}
              />
            </Link>
            <Link to="/about">
              <Navbar.Item icon={<TbUserCircle />} label="About" />
            </Link>
            <Link to="/services">
              <Navbar.Item icon={<IoLayersOutline />} label="Services" />
            </Link>
            <Link to="/contact">
              <Navbar.Item icon={<TbMessageChatbot />} label="Contact" />
            </Link>
          </Navbar>
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
