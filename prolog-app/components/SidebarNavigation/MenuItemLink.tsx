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
  height: 51px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  padding: 0px 12px;
  background: ${(props) => (props.isActive ? "#344054" : "transparent")};
  border-radius: 6px;
  a {
    display: flex;
    align-items: center;
    color: #f2f4f7;
    text-decoration: none;
  }
`;

const Icon = styled.img`
  margin-right: 12px;
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
