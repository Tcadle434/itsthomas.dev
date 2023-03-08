import React from "react";
import Image from "next/image";
import { projects } from "~/lib/projects";

const AllProjects = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={`${project.url}`}
            target="_blank"
            rel="noreferrer"
            className="gap-4 rounded-lg bg-gradient-to-r from-zinc-500 to-stone-500 p-1 shadow-lg shadow-zinc-800/10 duration-300 hover:scale-[103%] hover:shadow-xl hover:shadow-zinc-800/10 dark:shadow-zinc-200/10 dark:hover:shadow-zinc-200/10"
          >
            <div className="flex h-full cursor-pointer flex-col justify-between rounded-lg bg-zinc-200 p-4 dark:bg-zinc-800 ">
              <div>
                <h3 className="m-0 mb-6 w-full text-xl font-semibold leading-none tracking-tight text-zinc-800 dark:text-zinc-200">
                  {project.name}
                </h3>
                <p className="m-0 mb-6 w-full text-sm tracking-tight text-zinc-700 dark:text-zinc-300">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
