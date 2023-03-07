import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import IdentityFlip from "~/components/IdentityFlip";
import Layout from "~/components/Layout";

const Home: NextPage = () => {
  const images = ["/headshot.png", "/punk.png"];

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout description="Thomas Cadle's development portfolio">
        <div className="relative flex h-full w-full flex-col items-center justify-center p-8">
          <div className="mt-16 md:mt-2">
            <IdentityFlip
              frontImageUrl="/headshot.png"
              backImageUrl="/punk.png"
            />
          </div>
          <div className="relative mt-40">
            <h2 className="m-0 text-3xl font-extrabold text-zinc-200">
              About Me
            </h2>
            <p className="m-0 mb-4 text-lg text-zinc-400">
              Full Stack Web Developer | Startup Enthusiast | Blockchain Enjoyer
            </p>
            <p className="text-md m-0 text-zinc-300">
              I'm a full stack web developer with a passion for startups and
              blockchain projects. My current focus is on the development of
              consumer-facing products for the crypto space at BlockStop, a
              company that I co-founded.
            </p>
            <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-zinc-400 md:flex-row md:space-x-4 md:space-y-0">
              <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-200"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/blockchief"
                >
                  <svg
                    className="mr-2"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="h-7">follow me on twitter</p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-200"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://leerob.substack.com"
                >
                  <svg
                    className="mr-2"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="h-7">shoot me an email</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
