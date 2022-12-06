import React from "react";
import styled from "styled-components";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  onClick: () => void;
};

const ListItem = styled.li`
  padding: 8px 12px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: #f2f4f7;
  text-decoration: none;
  cursor: pointer;

  //remove default button styles
  margin: 0;
  padding: 0;
  line-height: normal;
  background: transparent;
  border: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

const Icon = styled.img`
  margin-right: 12px;
`;

export function MenuItemButton({ onClick, text, iconSrc }: MenuItemProps) {
  return (
    <ListItem>
      <Button onClick={onClick}>
        <Icon src={iconSrc} alt={`${text} icon`} />
        {text}
      </Button>
    </ListItem>
  );
}
