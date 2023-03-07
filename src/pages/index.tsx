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
          <div className="mt-16 md:mt-8">
            <IdentityFlip
              frontImageUrl="/headshot.png"
              backImageUrl="/punk.png"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
