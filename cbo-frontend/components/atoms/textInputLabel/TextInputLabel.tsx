import { StyledInputLabel } from "./TextInputLabel.style";

import type { FC } from "react";

interface ITextInputLabelProps {
  label: string;
}
const TextInputLabel: FC<ITextInputLabelProps> = ({ label }) => {
  return <StyledInputLabel>{label}</StyledInputLabel>;
};

export default TextInputLabel;
