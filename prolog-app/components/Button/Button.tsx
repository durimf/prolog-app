import styled from "styled-components";

export const Button = styled.button`
  //remove default button styles
  cursor: pointer;

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
