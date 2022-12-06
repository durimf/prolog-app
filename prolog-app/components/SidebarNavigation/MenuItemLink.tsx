import Link from "next/link";
import React from "react";
import styled from "styled-components";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  href: string;
};

const ListItem = styled.li`
  padding: 8px 12px;

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

export function MenuItemLink({ href, text, iconSrc }: MenuItemProps) {
  return (
    <ListItem>
      <Link href={href}>
        <Icon src={iconSrc} alt={`${text} icon`} />
        {text}
      </Link>
    </ListItem>
  );
}
