import styled, { css } from "styled-components";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItemButton } from "./MenuItemButton";
import { Routes } from "../../config/routes";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { NavigationContext } from "@contexts/Navigation";
import { Button as UnstyledButton } from "@components/Button";

const menuItems = [
  { text: "Projects", iconSrc: "/icons/projects.svg", href: Routes.projects },
  { text: "Issues", iconSrc: "/icons/issues.svg", href: Routes.issues },
  { text: "Alerts", iconSrc: "/icons/alerts.svg", href: Routes.alerts },
  { text: "Users", iconSrc: "/icons/users.svg", href: Routes.users },
  { text: "Settings", iconSrc: "/icons/settings.svg", href: Routes.settings },
];

const Container = styled.div<{ isCollapsed: boolean }>`
  ${(props) =>
    props.isCollapsed &&
    css`
      ${Header} {
        width: 50px;
      }

      ${Nav} {
        width: 50px;
      }

      ${Logo} {
        width: 23px;
      }
    `}
`;

const Header = styled.header`
  width: calc(100% - 2 * ${({ theme }) => theme.spacing[4]});
  background: ${({ theme }) => theme.colors.gray[900]};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  @media (min-width: 768px) {
    width: 248px;
    padding: ${({ theme }) =>
      `${theme.spacing[8]} ${theme.spacing[4]} ${theme.spacing[6]}`};
  }
`;

const Nav = styled.nav`
  width: 248px;
  height: calc(100vh - 2 * 32px);
  padding: ${({ theme }) => `0 ${theme.spacing[4]} ${theme.spacing[8]}`};
  background: ${({ theme }) => theme.colors.gray[900]};
  display: flex;
  flex-direction: column;

  transform: translateX(-100%);
`;

const Logo = styled.img`
  width: 118px;
  @media (min-width: 768px) {
    margin: ${({ theme }) => `0 ${theme.spacing[3]}`};
  }
`;

const MenuButton = styled(UnstyledButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.img`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Container isCollapsed={isSidebarCollapsed}>
      <Header>
        <Logo
          src={
            isSidebarCollapsed
              ? "/icons/logo-small.svg"
              : "/icons/logo-large.svg"
          }
          alt="logo"
        />
        <MenuButton onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon
            src={isMobileMenuOpen ? "/icons/close.svg" : "/icons/hamburger.svg"}
            alt="hamburger icon"
          />
        </MenuButton>
      </Header>

      <Nav>
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
              isSidebarCollapsed
                ? "/icons/uncollapse.svg"
                : "/icons/collapse.svg"
            }
            onClick={() => toggleSidebar()}
            isCollapsed={isSidebarCollapsed}
          />
        </List>
      </Nav>
    </Container>
  );
}
