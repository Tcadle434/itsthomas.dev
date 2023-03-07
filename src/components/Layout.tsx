/* eslint-disable @typescript-eslint/no-unused-vars */

import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import NavBar from "./Navbar";
import MobileNavBar from "./MobileNavbar";

export default function Layout({
  children,
  description,
  image,
}: {
  children: ReactElement;
  description: string;
  image?: string;
}) {
  const router = useRouter();
  const currentRoute = router.route;

  return (
    <div>
      <Head>
        <title>
          {currentRoute === "/"
            ? "Thomas's Portfolio"
            : `Thomas's Portfolio - ${currentRoute.slice(1)}`}
        </title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#27272a" />
        <meta property="og:site_name" content="Thomas's Portfolio" />
      </Head>
      <body className="flex max-w-3xl flex-col bg-zinc-900 antialiased md:mt-8 md:flex-row lg:mx-auto lg:mt-12">
        <div className="fixed left-0 z-50 hidden h-full w-[6%] md:block lg:block">
          <NavBar path={currentRoute} />
        </div>
        <div className="fixed top-0 z-50 block w-full px-8 pt-4 md:hidden lg:hidden">
          <MobileNavBar path={currentRoute} />
        </div>
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0">
          {children}
        </main>
      </body>
    </div>
  );
}
