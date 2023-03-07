import {
  FiHome,
  FiClock,
  FiPaperclip,
  FiHeadphones,
  FiUser,
  FiBookOpen,
  FiSun,
  FiMoon,
  FiCommand,
  FiZap,
} from "react-icons/fi";
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import { useKBar } from "kbar";
import { useTheme } from "next-themes";

const NavbarItems = [
  {
    name: "Home",
    slug: "/",
    icon: FiHome,
  },
  {
    name: "About",
    slug: "/about",
    icon: FiUser,
  },
  {
    name: "Portfolio",
    slug: "/portfolio",
    icon: FiBookOpen,
  },
  {
    name: "Links",
    slug: "/links",
    icon: FiPaperclip,
  },
];

export default function NavBar({ path }: { path: string }) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { query } = useKBar();
  const [mounted, setMounted] = useState(false);
  const [tooltipVisibility, setTooltipVisibility] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // function handleThemeBtnCLick() {
  //   // console.log("ok")
  //   themeIcon === "dark" ? setThemeIcon("light") : setThemeIcon("dark");
  // }

  return (
    <div className="flex h-full min-h-full w-full flex-col items-center justify-start pt-6">
      <div className="flex flex-col gap-4">
        {NavbarItems.map((item, index) => {
          return (
            <div key={item.slug}>
              {path === item.slug ? (
                <button
                  key={index}
                  className="relative flex w-full items-center justify-center rounded bg-zinc-800 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-800 hover:shadow-xl focus:bg-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-700 dark:focus:bg-zinc-700"
                  onMouseLeave={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = false;
                    setTooltipVisibility(temp);
                  }}
                  onMouseEnter={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = true;
                    setTooltipVisibility(temp);
                  }}
                  onClick={() => router.push(item.slug)}
                >
                  <div className="p-2">
                    <item.icon size="1rem" className="text-zinc-100" />
                  </div>
                  {tooltipVisibility[index] && (
                    <span className="absolute left-10 min-w-full rounded bg-zinc-800 p-[0.62rem] text-[0.75rem] leading-none text-zinc-200 shadow-xl dark:bg-zinc-700">
                      {item.name}
                    </span>
                  )}
                </button>
              ) : (
                <button
                  key={index}
                  className="relative flex w-full items-center justify-center rounded bg-zinc-700 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-800 hover:shadow-xl focus:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:bg-zinc-700"
                  onMouseLeave={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = false;
                    setTooltipVisibility(temp);
                  }}
                  onMouseEnter={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = true;
                    setTooltipVisibility(temp);
                  }}
                  onClick={() => router.push(item.slug)}
                >
                  <div className="p-2">
                    <item.icon size="1rem" className="text-zinc-100" />
                  </div>
                  {tooltipVisibility[index] && (
                    <span className="absolute left-10 rounded bg-zinc-800 p-[0.62rem] text-[0.75rem] leading-none text-zinc-200 shadow-xl dark:bg-zinc-700">
                      {item.name}
                    </span>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 h-full border-r-2 border-zinc-500 dark:border-zinc-800"></div>
    </div>
  );
}
