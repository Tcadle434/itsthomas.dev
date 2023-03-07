import React from "react";
import Head from "next/head";
import Layout from "~/components/Layout";

const portfolio = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout description="Thomas Cadle's development portfolio">
        <div className="relative flex h-full w-full flex-col items-center justify-center p-8">
          <div className="mt-8">
            <h1>portfolio</h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default portfolio;
