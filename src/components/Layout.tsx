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

  console.log(router);
  console.log(currentRoute);

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
      <main className="font-clash max-h-auto relative flex min-h-screen flex-col items-center overflow-x-hidden bg-zinc-100 selection:bg-zinc-200/30 dark:bg-zinc-900">
        <div className="flex h-full w-full md:w-2/3 lg:w-[60%]">
          <div className="fixed left-0 z-50 hidden h-full w-[6%] md:block lg:block">
            <NavBar path={currentRoute} />
          </div>
          <div className="fixed top-0 z-50 block w-full px-8 pt-4 md:hidden lg:hidden">
            <MobileNavBar path={currentRoute} />
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
