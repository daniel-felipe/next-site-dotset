import { Button } from "@/components/ui/button";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-black">
			<h2 className="text-4xl text-gray-100">Hello World</h2>

			<Button>Button</Button>
		</div>
	);
}
