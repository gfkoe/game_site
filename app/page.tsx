"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="container flex flex-col items-start">
        <p>Hello There</p>
        <p>Welcome to Gameboards</p>
        <br />
        <p>
          Written by{" "}
          <Link
            style={{ color: "#bdada0" }}
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about">
            Gabriel Koeb
          </Link>
        </p>
        <p>Click my name above to learn more about me!</p>
      </div>
    </main>
  );
}
