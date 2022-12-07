import styled from "styled-components";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItemButton } from "./MenuItemButton";
import { Routes } from "../../config/routes";
import { useRouter } from "next/router";
import { useContext } from "react";
import { NavigationContext } from "@contexts/Navigation";

const menuItems = [
  { text: "Projects", iconSrc: "/icons/projects.svg", href: Routes.projects },
  { text: "Issues", iconSrc: "/icons/issues.svg", href: Routes.issues },
  { text: "Alerts", iconSrc: "/icons/alerts.svg", href: Routes.alerts },
  { text: "Users", iconSrc: "/icons/users.svg", href: Routes.users },
  { text: "Settings", iconSrc: "/icons/settings.svg", href: Routes.settings },
];

const Nav = styled.nav<{ isCollapsed: boolean }>`
  width: ${(props) => (props.isCollapsed ? "50px" : "248px")};
  height: calc(100vh - 2 * 32px);
  padding: 32px 16px;
  background: #101828;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img<{ isCollapsed: boolean }>`
  margin: 0px 12px 24px;
  width: ${(props) => (props.isCollapsed ? "23px" : "118px")};
`;

const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const LinkList = styled(List)`
  flex: 1;
`;

export function SidebarNavigation() {
  const router = useRouter();
  const { isSidebarCollapsed, toggleSidebar } = useContext(NavigationContext);
  console.log(router);
  return (
    <Nav isCollapsed={isSidebarCollapsed}>
      <Logo
        isCollapsed={isSidebarCollapsed}
        src={
          isSidebarCollapsed ? "/icons/logo-small.svg" : "/icons/logo-large.svg"
        }
      />

      <LinkList>
        {menuItems.map((menuItem, index) => (
          <MenuItemLink
            isCollapsed={isSidebarCollapsed}
            key={index}
            {...menuItem}
            isActive={router.pathname === menuItem.href}
          />
        ))}
      </LinkList>

      <List>
        <MenuItemButton
          text="Support"
          iconSrc="/icons/support.svg"
          onClick={() => alert("Support")}
          isCollapsed={isSidebarCollapsed}
        />
        <MenuItemButton
          text="Collapse"
          iconSrc={
            isSidebarCollapsed ? "/icons/uncollapse.svg" : "/icons/collapse.svg"
          }
          onClick={() => toggleSidebar()}
          isCollapsed={isSidebarCollapsed}
        />
      </List>
    </Nav>
  );
}
