import styled from "styled-components";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItemButton } from "./MenuItemButton";

const menuItems = [
  { text: "Projects", iconSrc: "/icons/projects.svg", href: "#" },
  { text: "Issues", iconSrc: "/icons/issues.svg", href: "#" },
  { text: "Alerts", iconSrc: "/icons/alerts.svg", href: "#" },
  { text: "Users", iconSrc: "/icons/users.svg", href: "#" },
  { text: "Settings", iconSrc: "/icons/settings.svg", href: "#" },
];

const Nav = styled.nav`
  width: 280px;
  height: 100vh;
  background: #101828;
  padding: 0px 16px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export function SidebarNavigation() {
  return (
    <Nav>
      <List>
        {menuItems.map((menuItem, index) => (
          <MenuItemLink key={index} {...menuItem} />
        ))}
      </List>

      <List>
        <MenuItemButton
          text="Support"
          iconSrc="/icons/support.svg"
          onClick={() => alert("Support")}
        />
        <MenuItemButton
          text="Collapse"
          iconSrc="/icons/collapse.svg"
          onClick={() => alert("Collapse")}
        />
      </List>
    </Nav>
  );
}
