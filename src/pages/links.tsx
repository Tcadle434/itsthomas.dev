import React from "react";
import Head from "next/head";
import Layout from "~/components/Layout";
import Links from "~/components/Links";

const links = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout description="Thomas Cadle's development portfolio">
        <div className="relative flex h-full w-full flex-col items-center justify-center p-8">
          <section className="prose mt-16 mb-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
            <div className="mt-8">
              <h2 className="m-0 text-3xl font-extrabold text-zinc-200">
                Links
              </h2>
              <p className="text-md m-0 mb-4 text-zinc-400">
                Here are links to my socials and other accounts
              </p>
            </div>
            <Links />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default links;
