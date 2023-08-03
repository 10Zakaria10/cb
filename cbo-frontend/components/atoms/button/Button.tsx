import { StyledButton, StyledButtonContent } from "./Button.style";

import type { FC } from "react";

export enum ButtonStyle {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  CANCEL = "cancel",
}

export enum ButtonType {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

interface IButton {
  text?: string;
  startIcon?: React.ReactNode;
  buttonType?: ButtonType;
  buttonStyle?: ButtonStyle;
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
}

const Button: FC<IButton> = ({
  text,
  startIcon,
  buttonType,
  buttonStyle,
  disabled,
  onClick,
  loading,
}) => {
  const getClassNameFromType = () => {
    return buttonStyle?.toString() ?? ButtonStyle.PRIMARY;
  };

  const getClassName = (): string => {
    return ` baseButton ${getClassNameFromType()}`;
  };

  const hasTextAndIcon = (text && startIcon) !== undefined;
  return (
    <StyledButton
      loading={loading}
      className={getClassName()}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {!loading && (
        <StyledButtonContent hasTextAndIcon={hasTextAndIcon}>
          {startIcon}
          <span>{text}</span>
        </StyledButtonContent>
      )}
    </StyledButton>
  );
};

export default Button;
