import UserManagement from "~components/templates/userManagement";
import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";

import { NextSeo } from "next-seo";

const usersPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <UserManagement />
    </>
  );
};

usersPage.layout = LayoutType.AdminSpace;

export default usersPage;
