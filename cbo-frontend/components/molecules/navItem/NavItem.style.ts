import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "styled-components";

export const StyledLink = styled.a`
  padding: ${getSpacing(10, 6, 11, 7)};
  text-decoration: none;
  font-weight: ${fontWeight.basic};
  font-size: ${fontSize.small};
  display: flex;
  align-items: center;
  & > svg {
    margin-inline-end: ${getSpacing(8)};
  }
`;

export const StyledNavItem = styled.li<{ active?: boolean }>`
  width: 100%;
  border-radius: ${({ active }) => (active ? "8px" : "0")};
  background: ${({ active }) => (active ? colorPalette.endeavour : "white")};
  & a {
    color: ${({ active }) => (active ? "white" : colorPalette.whiteGrey)};
  }

  & :hover {
    border-radius: 8px;
    color: white;
    background: ${colorPalette.endeavour};
  }
`;
