import { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type LayoutProps = {
	children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
	return (
		<div className="relative flex min-h-screen flex-col dark">
			<Header />

			<main className="flex-1 flex flex-col mb-12">{children}</main>

			<Footer />
		</div>
	);
}
