import TextInputError from "~components/atoms/textInputError";
import TextInputLabel from "~components/atoms/textInputLabel";
import type { IUserFormFields } from "~types/UserFormTypes";

import DatePicker from "../datePicker";
import TextInput from "../textInput";

import { InputWrapper } from "./TextField.style";

import type { TextFieldProps } from "@mui/material";
import type { FC } from "react";
import type { Control, UseFormRegisterReturn } from "react-hook-form";

interface ITextFieldProps extends Omit<TextFieldProps, "variant"> {
  label: string;
  editable?: boolean;
  register?: UseFormRegisterReturn;
  control?: Control<IUserFormFields>;
  error?: boolean;
  errorMessage?: string;
  inputType?: "date" | "email" | "password" | "text";
}

const TextField: FC<ITextFieldProps> = ({
  label,
  fullWidth,
  editable = true,
  register,
  control,
  error,
  errorMessage,
  inputType,
  ...restProps
}) => {
  return (
    <InputWrapper fullWidth={fullWidth}>
      <TextInputLabel label={label} />
      {inputType === "date" ? (
        <DatePicker disabled={!editable} control={control} error={error} />
      ) : (
        <TextInput
          disabled={!editable}
          fullWidth={fullWidth}
          error={error}
          inputType={inputType}
          register={register}
          {...restProps}
        />
      )}

      <TextInputError error={error} errorMessage={errorMessage} />
    </InputWrapper>
  );
};

export default TextField;
