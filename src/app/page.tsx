import Image from "next/image";
import { CareerLog } from "@/components/CareerLog";
import { FeaturedProjectCard, ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { TraceCard } from "@/components/TraceCard";
import { contact, featuredProject, projects } from "@/lib/content";
import headshot from "../../public/headshot.png";

function SectionLabel({ index, title }: { index: string; title: string }) {
	return (
		<div className="mb-10 flex items-baseline gap-4">
			<span className="font-mono text-[12px] text-moss">§{index}</span>
			<h2 className="font-mono text-[12px] uppercase tracking-[0.25em] text-fog">{title}</h2>
			<div className="h-px flex-1 self-center bg-line" />
		</div>
	);
}

function Nav() {
	return (
		<header className="rise mx-auto flex max-w-5xl items-center justify-between px-6 pt-7">
			<a href="#top" className="flex items-center gap-3">
				<Image
					src={headshot}
					alt="Thomas Cadle"
					width={30}
					height={30}
					priority
					className="rounded-full border border-line"
				/>
				<span className="font-mono text-[13px] text-cream">itsthomas.dev</span>
			</a>
			<nav className="flex items-center gap-5 font-mono text-[12px] text-fog md:gap-7">
				<a href="#work" className="link-slide hidden hover:text-cream sm:block">
					work
				</a>
				<a href="#career" className="link-slide hidden hover:text-cream sm:block">
					career
				</a>
				<a href="#now" className="link-slide hidden hover:text-cream sm:block">
					now
				</a>
				<a
					href={contact.resume}
					className="rounded-sm border border-moss/50 px-3 py-1.5 text-moss transition-colors hover:bg-moss hover:text-ink"
				>
					résumé
				</a>
			</nav>
		</header>
	);
}

function Hero() {
	return (
		<section className="mx-auto grid max-w-5xl gap-14 px-6 pt-20 pb-28 md:grid-cols-[1.15fr_1fr] md:items-center md:pt-28">
			<div>
				<p className="rise font-mono text-[12px] text-moss" style={{ animationDelay: "0.05s" }}>
					~/thomas-cadle · denver, co
				</p>
				<h1
					className="rise mt-5 text-[42px] leading-[1.05] text-cream md:text-[58px]"
					style={{ animationDelay: "0.15s" }}
				>
					I build AI systems you can{" "}
					<em className="text-moss not-italic underline decoration-moss/40 decoration-2 underline-offset-8">
						actually measure.
					</em>
				</h1>
				<p
					className="rise mt-7 max-w-[52ch] text-[16.5px] leading-relaxed text-cream/75"
					style={{ animationDelay: "0.3s" }}
				>
					Forward-deployed product engineer — eight years shipping 0→1 embedded with
					customers: startup CTO, founding engineer through an acquisition, owner of a
					$5M+/yr partner API at Magic Eden. Now: LLM agents with real retrieval, real
					evals, and a human in the loop.
				</p>
				<div
					className="rise mt-9 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[13px]"
					style={{ animationDelay: "0.45s" }}
				>
					<a href={contact.github} target="_blank" rel="noreferrer" className="link-slide text-cream">
						github ↗
					</a>
					<a href={contact.linkedin} target="_blank" rel="noreferrer" className="link-slide text-cream">
						linkedin ↗
					</a>
					<a href={`mailto:${contact.email}`} className="link-slide text-cream">
						email →
					</a>
				</div>
			</div>
			<div className="rise" style={{ animationDelay: "0.55s" }}>
				<TraceCard />
				<p className="mt-3 text-right font-mono text-[10.5px] text-fog/60">
					an actual run shape from Lykos, my open-source forecasting agent ↓
				</p>
			</div>
		</section>
	);
}

function NowSection() {
	return (
		<section id="now" className="mx-auto max-w-5xl px-6 pb-28">
			<SectionLabel index="03" title="now" />
			<Reveal className="flex flex-col gap-8 md:flex-row md:items-start">
				<Image
					src={headshot}
					alt="Thomas Cadle"
					width={104}
					height={104}
					className="rounded-md border border-line"
				/>
				<div className="max-w-[62ch] text-[16px] leading-relaxed text-cream/80">
					<p>
						Currently building{" "}
						<a
							href="https://github.com/Tcadle434/prediction-market-agent"
							target="_blank"
							rel="noreferrer"
							className="link-slide text-moss"
						>
							Lykos
						</a>{" "}
						in public, and open to forward-deployed / applied-AI roles — the kind where
						you sit with the customer, prototype fast, and ship something measurable.
					</p>
					<p className="mt-4 text-cream/60">
						Off the clock I&apos;m chasing a single-digit handicap. The accent color is
						not a coincidence.
					</p>
				</div>
			</Reveal>
		</section>
	);
}

function Footer() {
	return (
		<footer className="border-t border-line">
			<div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
				<Reveal>
					<p className="font-mono text-[12px] text-fog">say hello —</p>
					<a
						href={`mailto:${contact.email}`}
						className="link-slide mt-2 inline-block text-2xl text-cream md:text-4xl"
					>
						{contact.email}
					</a>
				</Reveal>
				<div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11.5px] text-fog">
					<div className="flex gap-5">
						<a href={contact.github} target="_blank" rel="noreferrer" className="link-slide hover:text-cream">
							github
						</a>
						<a href={contact.linkedin} target="_blank" rel="noreferrer" className="link-slide hover:text-cream">
							linkedin
						</a>
						<a href={contact.x} target="_blank" rel="noreferrer" className="link-slide hover:text-cream">
							x
						</a>
						<a href={contact.resume} className="link-slide hover:text-cream">
							résumé
						</a>
					</div>
					<a
						href="https://github.com/Tcadle434/itsthomas.dev"
						target="_blank"
						rel="noreferrer"
						className="link-slide hover:text-cream"
					>
						designed &amp; built by me — view source ↗
					</a>
				</div>
			</div>
		</footer>
	);
}

export default function Home() {
	return (
		<main id="top">
			<Nav />
			<Hero />

			<section id="work" className="mx-auto max-w-5xl px-6 pb-28">
				<SectionLabel index="01" title="selected work" />
				<Reveal>
					<FeaturedProjectCard project={featuredProject} />
				</Reveal>
				<div className="mt-6 grid gap-6 md:grid-cols-2">
					{projects.map((project, index) => (
						<Reveal key={project.name} delayMs={index * 90}>
							<ProjectCard project={project} />
						</Reveal>
					))}
				</div>
			</section>

			<section id="career" className="mx-auto max-w-5xl px-6 pb-28">
				<SectionLabel index="02" title="career · hash-chained" />
				<CareerLog />
			</section>

			<NowSection />
			<Footer />
		</main>
	);
}
