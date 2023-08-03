import React from "react";

import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";

import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo title="Inscription" />
    </div>
  );
};
Home.layout = LayoutType.AdminSpace;

export default Home;
