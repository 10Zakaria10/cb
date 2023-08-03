import UserDetails from "~components/templates/userDetails";
import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";

import { NextSeo } from "next-seo";

const usersPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <UserDetails />
    </>
  );
};

usersPage.layout = LayoutType.AdminSpace;

export default usersPage;
