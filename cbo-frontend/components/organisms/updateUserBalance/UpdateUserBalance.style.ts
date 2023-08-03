import { colorPalette, fontWeight, getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledPointsFieldContainer = styled.div<{ editable: boolean }>`
  margin-top: ${getSpacing(15)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ editable }) => (editable ? "row" : "column")};
  & > button {
    min-width: 25%;
    margin-top: ${({ editable }) =>
      editable ? getSpacing(10) : getSpacing(40)};
  }
`;

export const StyledPointsPreview = styled.p<{ editable: boolean }>`
  margin: 0;
  color: ${colorPalette.endeavour};
  font-weight: ${fontWeight.basic};
  font-size: 20px;
  padding-inline-end: ${({ editable }) => (editable ? getSpacing(40) : 0)};
  text-align: ${({ editable }) => (editable ? "end" : "center")};

  min-width: ${getSpacing(300)};
  & span {
    color: #151515;
  }
`;
