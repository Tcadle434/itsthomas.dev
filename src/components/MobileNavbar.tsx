import {
  FiHome,
  FiClock,
  FiPaperclip,
  FiHeadphones,
  FiUser,
  FiBookOpen,
  FiSun,
  FiCommand,
  FiMoon,
  FiZap,
} from "react-icons/fi";
import { useRouter } from "next/router";
import { useKBar } from "kbar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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

export default function MobileNavBar({ path }: { path: string }) {
  const { query } = useKBar();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex h-full min-h-full min-w-full items-center justify-center gap-4 overflow-x-scroll rounded-lg bg-zinc-500/50 py-1 shadow-xl dark:bg-zinc-800/50">
      <div className="flex justify-evenly gap-4">
        {NavbarItems.map((item, index) => {
          return (
            <button
              key={index}
              className="flex h-12 w-full items-center justify-center px-2"
            >
              {path === item.slug ? (
                <item.icon
                  size="2rem"
                  className="cursor-pointer rounded bg-zinc-800 py-2 text-zinc-100 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-800 hover:shadow-xl dark:bg-zinc-700 dark:hover:bg-zinc-700"
                  onClick={() => router.push(item.slug)}
                />
              ) : (
                <item.icon
                  size="2rem"
                  className="cursor-pointer rounded bg-zinc-700 py-2 text-zinc-100 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-800 hover:shadow-xl dark:bg-zinc-800 dark:hover:bg-zinc-700"
                  onClick={() => router.push(item.slug)}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
