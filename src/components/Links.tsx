import { links } from "../lib/links";

export default function Links() {
  return (
    <div className="flex justify-between gap-2 rounded-lg bg-gradient-to-r from-neutral-200 to-zinc-200 p-4 shadow-xl dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800">
      <div className="flex w-full flex-col gap-2">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-zinc-100/60 p-2 duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900/60"
            onClick={() => window.open(link.url, "_blank")}
          >
            <p className="m-0 text-sm text-zinc-800 dark:text-zinc-300 md:text-base lg:text-base">
              {link.name}{" "}
              <span className="text-zinc-500 dark:text-zinc-600">{" // "}</span>{" "}
              {link.value}
            </p>
            <p className="m-0 text-zinc-800 dark:text-zinc-300">
              {link.icon({})}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
