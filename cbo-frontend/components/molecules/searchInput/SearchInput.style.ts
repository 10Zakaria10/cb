import { getSpacing } from "~styles/styleSheet";

import { OutlinedInput } from "@mui/material";
import styled from "styled-components";

export const StyledSearchInput = styled(OutlinedInput)`
  background: #f9fbff;
  border-radius: 10px;
  height: ${getSpacing(45)};
`;
