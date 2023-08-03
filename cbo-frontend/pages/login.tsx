import Login from "~components/templates/login";
import { LayoutType } from "~layouts/config";
import type { NextPage } from "~types/next";

import { NextSeo } from "next-seo";

const LoginPage: NextPage = () => {
  return (
    <div>
      <NextSeo title="Login" />
      <Login />
    </div>
  );
};

LoginPage.layout = LayoutType.Default;

export default LoginPage;
