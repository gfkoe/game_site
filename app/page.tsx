"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="container flex flex-col items-start">
        <h1>Hello There</h1>
        <h1>Welcome to Gameboards</h1>
        <br />
        <h1>
          Written by{" "}
          <Link
            style={{ color: "#a26632" }}
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            Gabriel Koeb
          </Link>
        </h1>
        <h1>Click my name above to learn more about me!</h1>
      </div>
    </main>
  );
}
