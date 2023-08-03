import Loader from "~components/atoms/loader";

import { StyledLoadingFrame } from "./LoadingFrame.style";

import type { FC } from "react";

const LoadingFrame: FC = () => {
  return (
    <StyledLoadingFrame>
      <Loader />
    </StyledLoadingFrame>
  );
};

export default LoadingFrame;
