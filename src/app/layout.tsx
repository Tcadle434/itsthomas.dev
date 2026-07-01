import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-fraunces",
});

const plexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-plex-mono",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.itsthomas.dev"),
	title: "Thomas Cadle — forward-deployed engineer",
	description:
		"I build AI systems you can actually measure. Eight years shipping 0→1 products embedded with customers — agents, RAG, evals, and human-in-the-loop gates.",
	openGraph: {
		title: "Thomas Cadle — forward-deployed engineer",
		description:
			"AI systems you can actually measure: agents, RAG, evals, human-in-the-loop gates.",
		url: "https://www.itsthomas.dev",
		siteName: "itsthomas.dev",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Thomas Cadle — forward-deployed engineer",
		description:
			"AI systems you can actually measure: agents, RAG, evals, human-in-the-loop gates.",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${fraunces.variable} ${plexMono.variable}`}>
			<body>{children}</body>
		</html>
	);
}
