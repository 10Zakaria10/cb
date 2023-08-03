import { StyledInput } from "./TextInput.style";

import type { TextFieldProps } from "@mui/material";
import type { FC } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IStyledTextField extends Omit<TextFieldProps, "variant"> {
  register?: UseFormRegisterReturn;
  error?: boolean;
  inputType?: "email" | "password" | "text";
  fullWidth?: boolean;
}

const TextInput: FC<IStyledTextField> = ({
  error,
  inputType = "text",
  register,
  fullWidth,
  ...restProps
}) => {
  return (
    <StyledInput
      error={error}
      margin="none"
      fullWidth={fullWidth}
      type={inputType}
      {...register}
      {...restProps}
    />
  );
};

export default TextInput;
