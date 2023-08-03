import { colorPalette, getSpacing } from "~styles/styleSheet";

import type { SxProps } from "@mui/material";

export const customStyle: SxProps = {
  "& .PrivatePickersSlideTransition-root": { minHeight: getSpacing(110) },
  "& .Mui-selected": { backgroundColor: colorPalette.endeavour },
};
