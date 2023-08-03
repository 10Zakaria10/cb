import { fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const StyledInput = styled(TextField)`
  & .MuiInputBase-root.Mui-disabled {
    background-color: #f2f6ff;
  }
  .MuiOutlinedInput-root {
    min-width: ${getSpacing(300)};
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.normal};
    color: black;
    border-radius: ${getSpacing(8)};
    height: ${getSpacing(36)};
    margin-top: ${getSpacing(2)};
    border-color: ${(props) => (props.error ? "red" : "black")};
  }
  .MuiFormControl-root-MuiTextField-root {
    margin-top: ${getSpacing(2)};
  }
  .Mui-disabled {
    -webkit-text-fill-color: black;
    & fieldset {
      display: none;
    }
  }
`;
