import { colorPalette, getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledReceiptsHistoryListHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${getSpacing(18)};
`;

export const StyledSearchContainer = styled.div`
  & svg,
  .MuiInputBase-input {
    color: ${colorPalette.endeavour};
  }
  & .MuiOutlinedInput-root {
    border-radius: ${getSpacing(10)};
    max-height: ${getSpacing(39)};
    max-width: ${getSpacing(190)};
  }
`;
