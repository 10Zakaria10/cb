import { colorPalette, getSpacing } from "~styles/styleSheet";

import { Pagination } from "@mui/material";
import styled from "styled-components";

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: ${getSpacing(50, 50, 0, 0)};
`;

export const StyledPagination = styled(Pagination)`
  & .MuiPaginationItem-root {
    padding: ${getSpacing(3, 2.5)};
    font-family: "Poppins";
    background-color: #f5f5f5;
    margin-inline-start: ${getSpacing(8)};
    &:hover {
      background-color: ${colorPalette.endeavour}99;
      color: white;
    }
  }
  && {
    & .Mui-selected {
      background-color: ${colorPalette.endeavour};
      color: white;
    }
  }
  & .MuiPaginationItem-ellipsis {
    background-color: transparent;
  }
`;
