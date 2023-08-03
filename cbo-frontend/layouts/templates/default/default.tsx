import React from "react";

import { SITE_CONFIG } from "~config/site";
import GlobalStyle from "~styles/globalCss";

import Head from "next/head";
import { DefaultSeo } from "next-seo";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Lato:400"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>

      <DefaultSeo
        defaultTitle={SITE_CONFIG.title}
        description={SITE_CONFIG.description}
        titleTemplate={`%s ${SITE_CONFIG.titleSeparator} ${SITE_CONFIG.title}`}
      />
      <GlobalStyle />
      <div>{children}</div>
    </>
  );
};

export default DefaultLayout;
