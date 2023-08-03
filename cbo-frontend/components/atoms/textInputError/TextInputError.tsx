import { StyledErrorLabel } from "./TextInputError.style";

import type { FC } from "react";

interface ITextInputErrorProps {
  error?: boolean;
  errorMessage?: string;
}
const TextInputError: FC<ITextInputErrorProps> = ({ error, errorMessage }) => {
  return <StyledErrorLabel>{error && errorMessage}</StyledErrorLabel>;
};

export default TextInputError;
