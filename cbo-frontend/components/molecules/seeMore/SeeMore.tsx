import { StyledLine, StyledSeeMoreContainer } from "./SeeMore.style";

import type { FC } from "react";

interface ISeeMoreProps {
  onSeeMoreClick: () => void;
  totalElements: number;
  size: number;
}
const SeeMore: FC<ISeeMoreProps> = ({
  onSeeMoreClick,
  totalElements,
  size,
}) => {
  const enabled = totalElements - size > 0;
  return (
    <StyledSeeMoreContainer enabled={enabled}>
      <StyledLine enabled={enabled} />
      <span onClick={onSeeMoreClick}>Voir Plus</span>
      <StyledLine enabled={enabled} />
    </StyledSeeMoreContainer>
  );
};

export default SeeMore;
