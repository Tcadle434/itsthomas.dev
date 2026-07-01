type TraceLine = {
	marker: string;
	node: string;
	detail: string;
	status?: string;
	statusClass?: string;
	delay: number;
	stamp?: { text: string; delay: number };
};

const LINES: TraceLine[] = [
	{ marker: "▸", node: "ingest", detail: "polymarket/fed-cuts-2026", status: "ok · 412ms", delay: 0.5 },
	{ marker: "▸", node: "rag", detail: "54 chunks → 5 passages", status: "grounded", delay: 0.9 },
	{ marker: "▸", node: "forecast", detail: "P(yes) 0.38 · conf 0.72", status: "5 citations", delay: 1.3 },
	{ marker: "▸", node: "size", detail: "edge +0.06 → 2u · ¼-kelly", status: "capped", delay: 1.7 },
	{
		marker: "⏸",
		node: "approval",
		detail: "interrupt() — awaiting human",
		delay: 2.1,
		stamp: { text: "APPROVED", delay: 4.6 },
	},
	{ marker: "▸", node: "execute", detail: "paper fill @ ask 0.32", status: "position open", delay: 5.0 },
	{ marker: "▸", node: "log", detail: "sha256 9f3a…52c1", status: "⛓ chained", delay: 5.4 },
];

export function TraceCard() {
	return (
		<div className="rounded-lg border border-line bg-panel/80 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]">
			<div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[11px] text-fog">
				<span>lykos · forecast run</span>
				<span className="text-fog/60">thread 0x9f3a</span>
			</div>
			<div className="space-y-2 px-4 py-4 font-mono text-[11.5px] leading-relaxed sm:text-[12.5px]">
				{LINES.map((line) => (
					<div
						key={line.node}
						className="trace-line grid grid-cols-[12px_64px_1fr_auto] items-baseline gap-x-2 sm:grid-cols-[14px_76px_1fr_auto]"
						style={{ animationDelay: `${line.delay}s` }}
					>
						<span className={line.marker === "⏸" ? "text-amber" : "text-moss"}>
							{line.marker}
						</span>
						<span className="text-cream">{line.node}</span>
						<span className="truncate text-fog">{line.detail}</span>
						{line.stamp ? (
							<span
								className="trace-stamp rounded-sm border border-moss/50 px-1.5 py-px text-[10px] font-semibold tracking-wider text-moss"
								style={{ animationDelay: `${line.stamp.delay}s` }}
							>
								{line.stamp.text}
							</span>
						) : (
							<span className="text-right text-moss/80">{line.status}</span>
						)}
					</div>
				))}
				<div
					className="trace-line flex gap-2 pt-1 text-fog/70"
					style={{ animationDelay: "5.8s" }}
				>
					<span className="text-moss">$</span>
					<span className="trace-caret">▮</span>
				</div>
			</div>
		</div>
	);
}
