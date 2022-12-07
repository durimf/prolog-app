import { theme } from "@styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
};

const ListItem = styled.li<{ isActive: boolean }>`
  height: ${({ theme }) => theme.spacing[12]};
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[1]};
  padding: 0px ${({ theme }) => theme.spacing[3]};
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.gray[700] : "transparent"};
  border-radius: ${({ theme }) => theme.spacing[1]};
  a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
  }
`;

const Icon = styled.img`
  margin-right: ${(props) => props.theme.spacing[3]};
`;

export function MenuItemLink({
  href,
  text,
  iconSrc,
  isActive,
  isCollapsed,
}: MenuItemProps) {
  return (
    <ListItem isActive={isActive}>
      <Link href={href}>
        <Icon src={iconSrc} alt={`${text} icon`} />
        {!isCollapsed && text}
      </Link>
    </ListItem>
  );
}
