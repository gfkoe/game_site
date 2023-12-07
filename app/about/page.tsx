"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function About() {
  const pathname = usePathname();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Below you will see some information about me:</h1>
      <div className="container flex flex-col items-start">
        <br />
        <p>My name is Gabriel Koeb, and I am a senior in Computer Science.</p>
        <br />
        <p>
          I am building this website as a way to explore more about web
          technoligies, specifically React, TailwindCSS, and Next.JS 14
        </p>
      </div>
    </main>
  );
}
