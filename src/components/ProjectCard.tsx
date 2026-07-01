import type { Project } from "@/lib/content";

const cardBase =
	"group rounded-lg border border-line bg-panel/60 transition-colors duration-300 hover:border-moss/40";

function ProjectLinks({ links }: { links: Project["links"] }) {
	return (
		<div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[12px]">
			{links.map((link) => (
				<a
					key={link.href}
					href={link.href}
					target="_blank"
					rel="noreferrer"
					className="link-slide text-moss"
				>
					{link.text} ↗
				</a>
			))}
		</div>
	);
}

export function FeaturedProjectCard({ project }: { project: Project }) {
	return (
		<article className={`${cardBase} grid gap-8 p-7 md:grid-cols-[1.4fr_1fr] md:p-9`}>
			<div className="flex flex-col gap-4">
				<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
					{project.label}
				</p>
				<h3 className="text-3xl text-cream md:text-4xl">{project.name}</h3>
				<p className="max-w-prose text-[15.5px] leading-relaxed text-cream/75">
					{project.description}
				</p>
				<p className="font-mono text-[12px] text-fog">{project.stack}</p>
				<ProjectLinks links={project.links} />
			</div>
			{project.stats && (
				<div className="grid h-fit grid-cols-2 gap-px self-center overflow-hidden rounded-md border border-line bg-line">
					{project.stats.map((stat) => (
						<div key={stat.caption} className="flex flex-col gap-1.5 bg-panel p-5">
							<span className="font-mono text-lg text-moss">{stat.value}</span>
							<span className="font-mono text-[11px] leading-snug text-fog">
								{stat.caption}
							</span>
						</div>
					))}
				</div>
			)}
		</article>
	);
}

export function ProjectCard({ project }: { project: Project }) {
	return (
		<article className={`${cardBase} flex flex-col gap-3.5 p-7`}>
			<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
				{project.label}
			</p>
			<h3 className="text-2xl text-cream">{project.name}</h3>
			<p className="text-[15px] leading-relaxed text-cream/75">{project.description}</p>
			<p className="font-mono text-[12px] text-fog">{project.stack}</p>
			<ProjectLinks links={project.links} />
		</article>
	);
}
