import Page from "./Page";
import { Sidebar, Avatar } from "sparkle-ui-library";
import { Link } from "react-router-dom";
import {
  TbHome,
  TbUsers,
  TbFileText,
  TbSettings,
  TbLogout,
  TbChevronsLeft,
  TbChevronsRight,
} from "react-icons/tb";
import SparkleIcon from "./SparkleIcon";

export default function SidebarDemo() {
  const codeSnippet = `
import { Sidebar, Avatar } from 'sparkle-ui-library';
import { TbHome, TbUsers, TbFileText, TbSettings, TbLogout } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Example() {
  return (
      <Sidebar
        collapseIcon={<TbChevronsLeft />}
        expandIcon={<TbChevronsRight />}
      >
      <Sidebar.Header title="Sparkle" subtitle="UI Component Library" icon={<TbHome />} />
      
      <Sidebar.Section title="Main">
        <Link to="/dashboard">
          <Sidebar.Item icon={<TbHome />} isActive={true}>Dashboard</Sidebar.Item>
        </Link>
        
        <Sidebar.Item icon={<TbUsers />}>
          Audience
          <div className="nested-items">
            <Link to="/audience/users">
              <Sidebar.Item nested icon={<TbUsers />}>Users</Sidebar.Item>
            </Link>
            <Link to="/audience/subscribers">
              <Sidebar.Item nested icon={<TbFileText />}>Subscribers</Sidebar.Item>
            </Link>
          </div>
        </Sidebar.Item>

        <Sidebar.Item icon={<TbFileText />}>
          Posts
          <div className="nested-items">
            <Link to="/posts/earnings">
              <Sidebar.Item nested>Earnings</Sidebar.Item>
            </Link>
            <Link to="/posts/funds">
              <Sidebar.Item nested>Funds</Sidebar.Item>
            </Link>
            <Link to="/posts/devices">
              <Sidebar.Item nested>Devices</Sidebar.Item>
            </Link>
            <Link to="/posts/payouts">
              <Sidebar.Item nested>Payouts</Sidebar.Item>
            </Link>
          </div>
        </Sidebar.Item>
      </Sidebar.Section>

      <Sidebar.Section title="Settings">
        <Link to="/settings">
          <Sidebar.Item icon={<TbSettings />}>Settings</Sidebar.Item>
        </Link>
      </Sidebar.Section>

      <Sidebar.Section title="Account">
        <Link to="/logout">
          <Sidebar.Item icon={<TbLogout />}>Logout</Sidebar.Item>
        </Link>
      </Sidebar.Section>

      <Sidebar.Footer
        avatar={<Avatar size="small"><Avatar.Image src="avatar.jpg" alt="User Avatar" /></Avatar>}
        name="John Doe"
        email="john.doe@example.com"
        dropdownItems={[
          { label: "Profile", onClick: () => console.log("Profile clicked") },
          { label: "Account Settings", onClick: () => console.log("Account Settings clicked") },
          { label: "Logout", onClick: () => console.log("Logout clicked") }
        ]}
      />
    </Sidebar>
  );
}`;

  return (
    <Page>
      <Page.Header
        title="Sidebar Component"
        subtitle="A flexible navigation component for UI frameworks."
      />

      <Page.Item>
        <h2>Interactive Sidebar Example</h2>
        <div className="page-item-content">
          <Sidebar
            collapseIcon={<TbChevronsLeft />}
            expandIcon={<TbChevronsRight />}
          >
            <Sidebar.Header
              title="Sparkle"
              subtitle="UI Component Library"
              icon={<SparkleIcon />}
            />

            <Sidebar.Section title="Main">
              <Link to="/dashboard">
                <Sidebar.Item icon={<TbHome />} isActive={true}>
                  Dashboard
                </Sidebar.Item>
              </Link>

              <Sidebar.Item icon={<TbUsers />}>
                Audience
                <div className="nested-items">
                  <Link to="/audience/users">
                    <Sidebar.Item nested icon={<TbUsers />}>
                      Users
                    </Sidebar.Item>
                  </Link>
                  <Link to="/audience/subscribers">
                    <Sidebar.Item nested icon={<TbFileText />}>
                      Subscribers
                    </Sidebar.Item>
                  </Link>
                </div>
              </Sidebar.Item>

              <Sidebar.Item icon={<TbFileText />}>
                Posts
                <div className="nested-items">
                  <Link to="/posts/earnings">
                    <Sidebar.Item nested>Earnings</Sidebar.Item>
                  </Link>
                  <Link to="/posts/funds">
                    <Sidebar.Item nested>Funds</Sidebar.Item>
                  </Link>
                  <Link to="/posts/devices">
                    <Sidebar.Item nested>Devices</Sidebar.Item>
                  </Link>
                  <Link to="/posts/payouts">
                    <Sidebar.Item nested>Payouts</Sidebar.Item>
                  </Link>
                </div>
              </Sidebar.Item>
            </Sidebar.Section>

            <Sidebar.Section title="Settings">
              <Link to="/settings">
                <Sidebar.Item icon={<TbSettings />}>Settings</Sidebar.Item>
              </Link>
            </Sidebar.Section>

            <Sidebar.Section title="Account">
              <Link to="/logout">
                <Sidebar.Item icon={<TbLogout />}>Logout</Sidebar.Item>
              </Link>
            </Sidebar.Section>

            <Sidebar.Footer
              avatar={
                <Avatar size="small">
                  <Avatar.Image src="avatar.jpg" alt="User Avatar" />
                </Avatar>
              }
              name="John Doe"
              email="john.doe@example.com"
              dropdownItems={[
                {
                  label: "Profile",
                  onClick: () => console.log("Profile clicked"),
                },
                {
                  label: "Account Settings",
                  onClick: () => console.log("Account Settings clicked"),
                },
                {
                  label: "Logout",
                  onClick: () => console.log("Logout clicked"),
                },
              ]}
            />
          </Sidebar>
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
