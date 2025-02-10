import Avatar from "../../src/lib/Avatar/Avatar";
import Page from "./Page";

export default function AvatarDemo() {
  const codeSnippet = `
import { Avatar } from 'sparkle-ui-library';

export default function Example() {
  return (
    <>
      <Avatar size="large">
        <Avatar.Image src="./avatar.jpg" alt="User Avatar" />
      </Avatar>
      <Avatar size="medium">
        <Avatar.Text>JD</Avatar.Text>
      </Avatar>
      <Avatar size="small">
        <Avatar.Image src="./fallback-avatar.jpg" alt="Fallback Avatar" />
      </Avatar>
    </>
  );
}`;

  return (
    <Page>
      <Page.Header
        title="Avatar Component"
        subtitle="The Avatar component displays user images or initials."
      />

      <Page.Item>
        <h2>Variants</h2>
        <div className="page-item-content">
          <Avatar size="large">
            <Avatar.Image src="./avatar.jpg" alt="User Avatar" />
          </Avatar>
          <Avatar size="medium">
            <Avatar.Text>John Doe</Avatar.Text>
          </Avatar>
          <Avatar size="small">
            <Avatar.Image src="./fallback-avatar.jpg" alt="Fallback Avatar" />
          </Avatar>
        </div>
      </Page.Item>

      <Page.Snippet>{codeSnippet}</Page.Snippet>
    </Page>
  );
}
