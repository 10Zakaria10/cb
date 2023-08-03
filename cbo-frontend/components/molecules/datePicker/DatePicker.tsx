import React from "react";

import type { IUserFormFields } from "~types/UserFormTypes";
import { userFields } from "~types/UserFormTypes";

import TextInput from "../textInput/";

import { customStyle } from "./DatePicker.style";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { default as FrLocale } from "date-fns/locale/fr";
import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

interface IDatePickerProps {
  control?: Control<IUserFormFields>;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
}

const DatePicker: React.FC<IDatePickerProps> = ({
  placeholder,
  error,
  control,
  disabled,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const onDatePickerClickHandler = () => {
    setOpen(true);
  };

  const onDatePickerCloseHandler = () => {
    setOpen(false);
  };

  return (
    <Controller
      control={control}
      name={userFields.BIRTH_DATE}
      render={({ field }) => (
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={FrLocale}
        >
          <DesktopDatePicker
            {...field}
            open={open}
            disabled={disabled}
            PopperProps={{
              sx: customStyle,
            }}
            onClose={onDatePickerCloseHandler}
            renderInput={(params) => (
              <TextInput
                {...params}
                disabled={disabled}
                onClick={onDatePickerClickHandler}
                error={error}
                inputProps={{
                  ...params.inputProps,
                  placeholder,
                }}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
};
export default DatePicker;
