import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";

import { NextSeo } from "next-seo";

const AnimatorsPage: NextPage = () => {
  return (
    <div>
      <NextSeo title="Animators" />
      animators
    </div>
  );
};
AnimatorsPage.layout = LayoutType.AdminSpace;

export default AnimatorsPage;
