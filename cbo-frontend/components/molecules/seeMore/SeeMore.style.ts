import { colorPalette, fontWeight, getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledSeeMoreContainer = styled.div<{ enabled: boolean }>`
  margin-top: ${getSpacing(15)};
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    text-align: center;
    white-space: nowrap;
    padding: 0 30px;
    color: ${({ enabled }) => (enabled ? colorPalette.endeavour : "gray")};
    font-weight: ${fontWeight.bold};
    cursor: pointer;
  }
`;

export const StyledLine = styled.div<{ enabled: boolean }>`
  width: 100%;
  height: 1.6px;
  background: ${({ enabled }) =>
    enabled ? colorPalette.endeavour : "gray"} !important;
`;
