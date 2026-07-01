export type Project = {
	label: string;
	name: string;
	description: string;
	stack: string;
	links: { text: string; href: string }[];
	stats?: { value: string; caption: string }[];
};

export const featuredProject: Project = {
	label: "agent · open source",
	name: "Lykos",
	description:
		"A prediction-market research agent — and an argument that agents should be graded, not demoed. It retrieves and grounds evidence with a two-stage RAG pipeline, forecasts the outcome probability with cited reasoning, sizes a position with edge-aware Kelly, pauses at a human-approval gate, then paper-fills and writes a hash-chained audit record. Because markets resolve, every forecast eventually gets a real grade against the price itself.",
	stack: "LangGraph.js · Claude · Voyage · pgvector · LangSmith · Python evals",
	links: [
		{ text: "repository", href: "https://github.com/Tcadle434/prediction-market-agent" },
		{
			text: "decision log",
			href: "https://github.com/Tcadle434/prediction-market-agent/blob/main/docs/ROADMAP.md",
		},
	],
	stats: [
		{ value: "146", caption: "tests across the monorepo" },
		{ value: "interrupt()", caption: "human gate before any position" },
		{ value: "sha256", caption: "hash-chained audit log" },
		{ value: "Brier", caption: "graded vs. the market price" },
	],
};

export const projects: Project[] = [
	{
		label: "fintech · llm tool-use",
		name: "Qurio",
		description:
			"A personal-finance agent that answers natural-language money questions — LLM tool-calling over live Plaid, Zerion, and account data. Code private; demo on request.",
		stack: "TypeScript · LLM tool-calling · Plaid · Zerion",
		links: [{ text: "landing", href: "https://github.com/Tcadle434/qurio-landing" }],
	},
	{
		label: "consumer ai",
		name: "MyTummyHurts",
		description:
			"An AI food scanner that flags gut-sensitivity triggers — an LLM scoring pipeline over ingredient data, wrapped in a mobile-first product.",
		stack: "TypeScript · React Native · LLM scoring pipeline",
		links: [{ text: "repository", href: "https://github.com/Tcadle434/mytummyhurts" }],
	},
];

export type CareerEntry = {
	period: string;
	role: string;
	org: string;
	outcome: string;
	hash: string;
	prev: string;
};

export const career: CareerEntry[] = [
	{
		period: "2025 → now",
		role: "independent ai engineer",
		org: "applied-ai products",
		outcome:
			"Building Lykos, Qurio, and MyTummyHurts — production LLM systems with retrieval, evals, and human-in-the-loop gates.",
		hash: "e7c1a4",
		prev: "b30f92",
	},
	{
		period: "2024 → 2025",
		role: "senior software engineer",
		org: "magic eden",
		outcome:
			"Scaled the wallet to a peak of 250k MAU across three chain ecosystems; built and owned the public partner API driving $5M+ in annual trading volume.",
		hash: "b30f92",
		prev: "77d2c8",
	},
	{
		period: "2023 → 2024",
		role: "founding partner engineer",
		org: "carpool",
		outcome:
			"First hire. Owned product and engineering for a high-performance Solana indexer, embedded with client teams — acquired by Magic Eden within 7 months.",
		hash: "77d2c8",
		prev: "4a91e0",
	},
	{
		period: "2021 → 2023",
		role: "co-founder / cto",
		org: "blockstop",
		outcome:
			"Product studio for enterprise consumer brands. Embedded with each client from scoping through production — $3M+ in delivered client work.",
		hash: "4a91e0",
		prev: "0d5f3b",
	},
	{
		period: "2018 → 2022",
		role: "senior software engineer",
		org: "capital one",
		outcome:
			"Real-time data-streaming services — Java, Python, Kafka, AWS — inside a regulated financial enterprise.",
		hash: "0d5f3b",
		prev: "genesis",
	},
];

export const contact = {
	email: "thomascadle434@gmail.com",
	github: "https://github.com/Tcadle434",
	linkedin: "https://www.linkedin.com/in/thomas-cadle-6ba290104/",
	x: "https://twitter.com/blockchief",
	resume: "/resume.pdf",
};
