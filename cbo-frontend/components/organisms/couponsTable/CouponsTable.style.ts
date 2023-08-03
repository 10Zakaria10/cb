import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "@emotion/styled";

export const StyledTableContainer = styled.div`
  overflow-x: scroll;
  margin-top: ${getSpacing(26)};
  &::-webkit-scrollbar-track {
    background: white;
  }
  &::-webkit-scrollbar {
    width: ${getSpacing(0.5)};
    height: ${getSpacing(1)};
  }
  &::-webkit-scrollbar-thumb {
    background: ${colorPalette.whiteGrey};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colorPalette.whiteGrey};
  }
`;
export const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  & thead {
    display: block;
    border: ${getSpacing(2)} solid rgba(0, 79, 159, 0.2);
    border-radius: ${getSpacing(8)};
  }
  & tbody {
    padding: ${getSpacing(0, 2)};
    display: block;
  }
`;

export const TableRow = styled.tr<{ withClick?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: ${getSpacing(8)};
  &.even {
    background: white;
  }
  &.odd {
    background: ${colorPalette.lightGrey};
  }
`;

export const TableHeadCell = styled.th`
  font-size: ${fontSize.small};
  color: black;
  padding: ${getSpacing(15, 0)};
  margin: 0;
  flex: 1;
  font-weight: ${fontWeight.basic};
  text-align: center;
  cursor: pointer;
  &:first-child {
    margin-inline-start: ${getSpacing(24)};
  }
`;

export const TableBodyCell = styled.td`
  font-size: ${fontSize.small};
  color: black;
  padding: ${getSpacing(10, 8)};
  margin: 0;
  flex: 1;
  font-weight: ${fontWeight.normal};
  cursor: pointer;
  text-align: center;
  &:first-child {
    margin-inline-start: ${getSpacing(24)};
  }
`;

export const StyledPlaceHolder = styled.div`
  text-align: center;
  margin-top: ${getSpacing(56)};
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.small};
  color: ${colorPalette.whiteGrey};
`;
