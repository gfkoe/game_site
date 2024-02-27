"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TypewriterComponent from "./components/TypewriterComponent";
export default function Home() {
  const pathname = usePathname();
  const lines = [
    "Hello There,",
    "Welcome to Gameboards",
    "Written by ",
    <div key="author">
      Written by <Link href="/about">Gabriel Koeb</Link>
    </div>,
    "Click my name above to learn more about me!",
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="container flex flex-col items-start typewriter">
        <TypewriterComponent lines={lines} speed={50} />
      </div>
    </main>
  );
}
