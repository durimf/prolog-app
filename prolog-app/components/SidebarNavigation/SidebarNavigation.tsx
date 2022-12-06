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
  height: calc(100vh - 2 * 32px);
  padding: 32px 16px;
  background: #101828;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  margin: 0px 12px 24px;
  width: 118px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0px;
  padding: 0;
`;

export function SidebarNavigation() {
  return (
    <Nav>
      <Logo src="/icons/logo-large.svg" />
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
