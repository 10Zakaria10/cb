import { StyledTitleHeading } from "./TitleHeading.style";

import type { FC } from "react";

interface ITitleHeadingProps {
  title: string;
}
const TitleHeading: FC<ITitleHeadingProps> = ({ title }) => {
  return (
    <div>
      <StyledTitleHeading>{title}</StyledTitleHeading>
    </div>
  );
};

export default TitleHeading;
