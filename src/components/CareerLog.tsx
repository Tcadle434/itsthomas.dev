import { career } from "@/lib/content";
import { Reveal } from "./Reveal";

export function CareerLog() {
	return (
		<ol className="relative flex flex-col">
			<div aria-hidden className="absolute top-2 bottom-2 left-[3px] w-px bg-line" />
			{career.map((entry, index) => (
				<li key={entry.hash} className="relative pb-10 pl-8 last:pb-0">
					<span
						aria-hidden
						className="absolute top-2 left-0 size-[7px] rounded-full border border-moss bg-ink"
					/>
					<Reveal delayMs={index * 60}>
						<p className="font-mono text-[11px] tracking-wider text-fog">
							[{entry.period}]
						</p>
						<h3 className="mt-1.5 font-mono text-[15px] font-semibold text-cream">
							{entry.role} <span className="text-fog">@</span>{" "}
							<span className="text-moss">{entry.org}</span>
						</h3>
						<p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-cream/75">
							{entry.outcome}
						</p>
						<p className="mt-2 font-mono text-[10.5px] text-fog/60">
							commit {entry.hash} <span className="text-moss/50">⛓</span> prev{" "}
							{entry.prev}
						</p>
					</Reveal>
				</li>
			))}
		</ol>
	);
}
