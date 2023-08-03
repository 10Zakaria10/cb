import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "@emotion/styled";

export const StyledTableContainer = styled.div`
  overflow-x: scroll;
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
  min-width: ${getSpacing(1010)};
  & thead {
    display: block;
    border-bottom: ${getSpacing(2)} solid ${colorPalette.gallery};
  }
  & tbody {
    display: block;
  }
`;

export const TableRow = styled.tr<{ withClick?: boolean }>`
  display: flex;
  align-items: center;
`;

export const TableHeadCell = styled.th`
  font-size: ${fontSize.small};
  color: ${colorPalette.whiteGrey};
  padding: ${getSpacing(15, 0)};
  margin: 0;
  flex: 1;
  font-weight: ${fontWeight.basic};
  cursor: pointer;
  text-align: left;
  &:first-child {
    margin-inline-start: ${getSpacing(24)};
  }
`;

export const TableBodyCell = styled.td`
  text-align: center;
  padding: ${getSpacing(22, 0, 20)};
  flex: 1;
  font-size: ${fontSize.small};
  color: ${colorPalette.shark};
  text-align: left;
  &:first-child {
    margin-inline-start: ${getSpacing(24)};
  }
  &:last-child {
    margin-inline-end: ${getSpacing(24)};
  }
`;

export const StyledPlaceHolder = styled.div`
  text-align: center;
  margin-top: ${getSpacing(56)};
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.small};
  color: ${colorPalette.whiteGrey};
`;
