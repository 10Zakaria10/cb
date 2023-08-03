import { colorPalette, fontWeight, getSpacing } from "~styles/styleSheet";

import LoadingButton from "@mui/lab/LoadingButton";
import styled from "styled-components";

interface ButtonContentProps {
  hasTextAndIcon?: boolean;
}

export const StyledButton = styled(LoadingButton)`
  & .MuiLoadingButton-loadingIndicator {
    color: white;
  }

  &.baseButton {
    border-radius: ${getSpacing(6)};
    padding: ${getSpacing(6, 14)};
    text-transform: none;
    cursor: pointer;
    min-height: ${getSpacing(40)};
  }
  &.primary {
    background-color: ${colorPalette.darkBlue};
    color: white;
    border: 1px solid ${colorPalette.darkBlue};
    &:hover:enabled {
      background-color: white;
      color: ${colorPalette.darkBlue};
      border: 1px solid ${colorPalette.darkBlue};
    }
  }
  &.secondary {
    background-color: ${colorPalette.cerulean};
    color: white;
    border: 1px solid ${colorPalette.cerulean};
    &:hover:enabled {
      background-color: white;
      color: ${colorPalette.cerulean};
    }
  }
  &.cancel {
    background-color: ${colorPalette.periGray};
    color: ${colorPalette.endeavour};
    border: 1px solid ${colorPalette.endeavour};
    &:hover:enabled {
      background-color: ${colorPalette.endeavour};
      color: ${colorPalette.periGray};
    }
  }
  &.danger {
    background-color: ${colorPalette.lightRed};
    color: ${colorPalette.red};
    &:hover:enabled {
      background-color: ${colorPalette.red};
      color: ${colorPalette.lightRed};
    }
  }
`;

export const StyledButtonContent = styled.div<ButtonContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    font-weight: ${fontWeight.basic};
    margin-inline-start: ${({ hasTextAndIcon }) =>
      hasTextAndIcon ? getSpacing(10) : 0};
  }
`;
