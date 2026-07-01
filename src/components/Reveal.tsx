"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	delayMs?: number;
};

export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isIn, setIsIn] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					setIsIn(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 },
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`reveal ${isIn ? "is-in" : ""} ${className}`}
			style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
		>
			{children}
		</div>
	);
}
