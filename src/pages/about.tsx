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
              <p className="text-md m-0 mb-4 text-zinc-400">
                Full Stack Web Developer | Startup Enthusiast | Blockchain
                Enjoyer
              </p>
              <p className="text-md m-0 text-zinc-300">
                Hey, I'm Thomas. Some of you may know me as <b>Blockchief</b> on
                twitter.
                <br />
                <br />
                I'm a full stack web developer with a passion for startups and
                blockchain projects. Currently, I'm working as a Partner Engineer
                for Carpool, a Solana B2B SaaS startup. My favorie tech stack consists of
                NextJS, Typescript, TailwindCSS, tRPC, and Prisma.
              </p>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <p className="text-md m-0 text-zinc-300">
                Prior to Carpool, I ran my own Web3 startup for 2 years called Blockstop, a development and marketing agency.
                Before that, I was as a senior software engineer at
                Capial One. I primarlily worked on the Digital Messaging
                division, building out high performance, AWS cloud based
                microservices and APIs. That was my first job after I graduated with a Computer
                Engineering degree from Penn State University.
              </p>
              <br />
              <br />
              <p className="text-md m-0 text-zinc-300">
                I'm as interested in building businesses as I am in actually
                writing code. It is a skillset that I hope to continue to grow
                as I learn more from my experiences and the people around me.
              </p>
              <br />
              <br />
              <p className="text-md m-0 text-zinc-300">
                Aside from my work life, I love to golf, ski, and play video
                games. On top of that, you'll find me frequently poking around
                on twitter, where I stay active with my favorite crypto
                communities.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default about;
