import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Sidebar } from "sparkle-ui-library";
import IntroductionPage from "./src/HomePage";
import AvatarShowcase from "./src/Avatar.demo";
import BadgeShowcase from "./src/Badge.demo";
import ButtonShowcase from "./src/Button.demo";
import CardShowcase from "./src/Card.demo";
import CheckboxShowcase from "./src/Checkbox.demo";
import DropdownShowcase from "./src/Dropdown.demo";
import InputShowcase from "./src/Input.demo";
import MenuShowcase from "./src/Menu.demo";
import NavbarShowcase from "./src/Navbar.demo";
import SidebarShowcase from "./src/Sidebar.demo";
import TextareaShowcase from "./src/Textarea.demo";
import ToggleSwitchShowcase from "./src/ToggleSwitch.demo";
import ConfigurationPage from "./src/ConfigurationPage";
import LogoutPage from "./src/LogoutPage";
import SparkleIcon from "./src/SparkleIcon";
import {
  TbHome,
  TbUserCircle,
  TbStar,
  TbCheck,
  TbCards,
  TbSquareCheck,
  TbLayoutNavbar,
  TbMenu2,
  TbInputSpark,
  TbLayoutSidebar,
  TbFileText,
  TbSwitch3,
  TbSettings,
  TbLogout,
  TbChevronsLeft,
  TbChevronsRight,
} from "react-icons/tb";
import "../src/lib/theme.css";

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2025 Sparkle UI Library.</p>
      <nav>
        Built with passion by{" "}
        <a
          href="https://oguzhanozenc.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oguzhan Ozenc.
        </a>
      </nav>
    </footer>
  );
}

function MainApp() {
  const location = useLocation();

  const sidebarLinks = [
    { to: "/", label: "Introduction", icon: <TbHome /> },
    { to: "/avatar", label: "Avatar", icon: <TbUserCircle /> },
    { to: "/badge", label: "Badge", icon: <TbStar /> },
    { to: "/button", label: "Button", icon: <TbCheck /> },
    { to: "/card", label: "Card", icon: <TbCards /> },
    { to: "/checkbox", label: "Checkbox", icon: <TbSquareCheck /> },
    { to: "/dropdown", label: "Dropdown", icon: <TbMenu2 /> },
    { to: "/input", label: "Input", icon: <TbInputSpark /> },
    { to: "/menu", label: "Menu", icon: <TbMenu2 /> },
    { to: "/navbar", label: "Navbar", icon: <TbLayoutNavbar /> },
    { to: "/sidebar", label: "Sidebar", icon: <TbLayoutSidebar /> },
    { to: "/textarea", label: "Textarea", icon: <TbFileText /> },
    { to: "/toggleswitch", label: "ToggleSwitch", icon: <TbSwitch3 /> },
  ];

  return (
    <div className="app-layout">
      <Sidebar
        collapseIcon={<TbChevronsLeft />}
        expandIcon={<TbChevronsRight />}
      >
        <Sidebar.Header
          title="Sparkle."
          subtitle="UI Component Library"
          icon={<SparkleIcon />}
        />

        <Sidebar.Section title="Foundations">
          {sidebarLinks.slice(0, 1).map(({ to, label, icon }) => (
            <Link key={to} to={to}>
              <Sidebar.Item icon={icon} isActive={location.pathname === to}>
                {label}
              </Sidebar.Item>
            </Link>
          ))}
        </Sidebar.Section>

        <Sidebar.Section title="Components">
          {sidebarLinks.slice(1).map(({ to, label, icon }) => (
            <Link key={to} to={to}>
              <Sidebar.Item icon={icon} isActive={location.pathname === to}>
                {label}
              </Sidebar.Item>
            </Link>
          ))}
        </Sidebar.Section>

        <Sidebar.Section title="Configuration">
          <Link to="/configuration">
            <Sidebar.Item
              icon={<TbSettings />}
              isActive={location.pathname === "/configuration"}
            >
              Configuration
            </Sidebar.Item>
          </Link>
        </Sidebar.Section>

        <Sidebar.Section title="Account">
          <Link to="/logout">
            <Sidebar.Item
              icon={<TbLogout />}
              isActive={location.pathname === "/logout"}
            >
              Logout
            </Sidebar.Item>
          </Link>
        </Sidebar.Section>
      </Sidebar>

      <div className="app-content">
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/avatar" element={<AvatarShowcase />} />
          <Route path="/badge" element={<BadgeShowcase />} />
          <Route path="/button" element={<ButtonShowcase />} />
          <Route path="/card" element={<CardShowcase />} />
          <Route path="/checkbox" element={<CheckboxShowcase />} />
          <Route path="/dropdown" element={<DropdownShowcase />} />
          <Route path="/input" element={<InputShowcase />} />
          <Route path="/menu" element={<MenuShowcase />} />
          <Route path="/navbar" element={<NavbarShowcase />} />
          <Route path="/sidebar" element={<SidebarShowcase />} />
          <Route path="/textarea" element={<TextareaShowcase />} />
          <Route path="/toggleswitch" element={<ToggleSwitchShowcase />} />
          <Route path="/configuration" element={<ConfigurationPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<IntroductionPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
