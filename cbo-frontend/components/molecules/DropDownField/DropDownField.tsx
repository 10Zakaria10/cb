import TextInputLabel from "~components/atoms/textInputLabel";
import type { IUserFormFields, userFields } from "~types/UserFormTypes";

import TextInput from "../textInput";

import { InputWrapper } from "./DropDownField.style";

import type { FC } from "react";
import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

interface IDropDownField {
  label: string;
  editable?: boolean;
  control?: Control<IUserFormFields>;
  name: userFields;
}

const DropDownField: FC<IDropDownField> = ({
  label,
  editable = true,
  control,
  name,
  children,
}) => {
  return (
    <InputWrapper>
      <TextInputLabel label={label} />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextInput {...field} disabled={!editable} select>
            {children}
          </TextInput>
        )}
      />
    </InputWrapper>
  );
};

export default DropDownField;
