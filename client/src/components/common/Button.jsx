import { styled } from "styled-components";

const Button = styled.button`
  padding: ${(props) => props.$padding || "6px 12px"};
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
  font-size: ${(props) => props.$size || "13px"};
  border: 1px solid;
  border-color: ${(props) => props.$border || "transparent"};
  cursor: pointer;
`;

export const PowderButton = styled(Button)`
  background-color: var(--powder-100);
  color: var(--powder-700);
  border-radius: ${(props) => props.$radius || "5px"};
  &:hover {
    background-color: var(--powder-100-hover);
  }
`;
export const WhiteButton = styled(Button)`
  background-color: var(--white);
  color: var(--black-750);
  border-radius: ${(props) => props.$radius || "15px"};
  &:hover {
    background-color: var(--app-back-color);
  }
  &.active {
    background-color: var(--orange);
    border-color: var(--orange);
    color: var(--white);
    &:hover {
      background-color: var(--orange-hover);
    }
  }
`;
export const BlueButton = styled(Button)`
  background-color: var(--blue-500);
  color: var(--white);
  border-radius: ${(props) => props.$radius || "5px"};
  &:hover {
    background-color: var(--blue-500-hover);
  }
`;
