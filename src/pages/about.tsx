import React from "react";
import Head from "next/head";
import Layout from "~/components/Layout";

const about = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout description="Thomas Cadle's development portfolio">
        <div className="relative flex h-full min-h-screen w-full flex-col items-center p-8">
          <section className="prose mt-16 mb-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
            <div className="mt-8">
              <h2 className="m-0 text-3xl font-extrabold text-zinc-200">
                About Me
              </h2>
              <p className="m-0 mb-4 text-lg text-zinc-400">
                Full Stack Web Developer | Startup Enthusiast | Blockchain
                Enjoyer
              </p>
              <p className="text-md m-0 text-zinc-300">
                Hey, I'm Thomas. Some of you may know me as <b>Blockchief</b> on
                twitter.
                <br />
                <br />
                I'm a full stack web developer with a passion for startups and
                blockchain projects. My current focus is on the development of
                consumer-facing products for the crypto space at BlockStop, a
                company that I co-founded.
              </p>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <p className="text-md m-0 text-zinc-300">
                Prior to BlockStop, I was as a senior software engineer at
                Capial One. I primarlily worked on the Digital Messaging
                division, building out high performance, AWS cloud based
                microservices and APIs
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default about;
