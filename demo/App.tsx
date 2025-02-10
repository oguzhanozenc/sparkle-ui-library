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
        Built with passion by
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

  return (
    <div className="app-layout">
      <Sidebar>
        <Sidebar.Header
          title="Sparkle."
          subtitle="UI Component Library"
          icon={<SparkleIcon />}
        />

        <Sidebar.Section title="Foundations">
          <Link to="/">
            <Sidebar.Item
              icon={<TbHome />}
              isActive={location.pathname === "/"}
            >
              Introduction
            </Sidebar.Item>
          </Link>
        </Sidebar.Section>

        <Sidebar.Section title="Components">
          <Link to="/avatar">
            <Sidebar.Item
              icon={<TbUserCircle />}
              isActive={location.pathname === "/avatar"}
            >
              Avatar
            </Sidebar.Item>
          </Link>
          <Link to="/badge">
            <Sidebar.Item
              icon={<TbStar />}
              isActive={location.pathname === "/badge"}
            >
              Badge
            </Sidebar.Item>
          </Link>
          <Link to="/button">
            <Sidebar.Item
              icon={<TbCheck />}
              isActive={location.pathname === "/button"}
            >
              Button
            </Sidebar.Item>
          </Link>
          <Link to="/card">
            <Sidebar.Item
              icon={<TbCards />}
              isActive={location.pathname === "/card"}
            >
              Card
            </Sidebar.Item>
          </Link>
          <Link to="/checkbox">
            <Sidebar.Item
              icon={<TbSquareCheck />}
              isActive={location.pathname === "/checkbox"}
            >
              Checkbox
            </Sidebar.Item>
          </Link>
          <Link to="/dropdown">
            <Sidebar.Item
              icon={<TbMenu2 />}
              isActive={location.pathname === "/dropdown"}
            >
              Dropdown
            </Sidebar.Item>
          </Link>
          <Link to="/input">
            <Sidebar.Item
              icon={<TbInputSpark />}
              isActive={location.pathname === "/input"}
            >
              Input
            </Sidebar.Item>
          </Link>
          <Link to="/menu">
            <Sidebar.Item
              icon={<TbMenu2 />}
              isActive={location.pathname === "/menu"}
            >
              Menu
            </Sidebar.Item>
          </Link>
          <Link to="/navbar">
            <Sidebar.Item
              icon={<TbLayoutNavbar />}
              isActive={location.pathname === "/navbar"}
            >
              Navbar
            </Sidebar.Item>
          </Link>
          <Link to="/sidebar">
            <Sidebar.Item
              icon={<TbLayoutSidebar />}
              isActive={location.pathname === "/sidebar"}
            >
              Sidebar
            </Sidebar.Item>
          </Link>
          <Link to="/textarea">
            <Sidebar.Item
              icon={<TbFileText />}
              isActive={location.pathname === "/textarea"}
            >
              Textarea
            </Sidebar.Item>
          </Link>
          <Link to="/toggleswitch">
            <Sidebar.Item
              icon={<TbSwitch3 />}
              isActive={location.pathname === "/toggleswitch"}
            >
              ToggleSwitch
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
          <Route path="*" element={<IntroductionPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
