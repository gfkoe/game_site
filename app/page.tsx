"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <main className="flex flex-col p-24 items-center justify-center h-screen">
      <div className="container flex flex-col align-middle items-center justify-center">
        <h1 className="text-center text-6xl">
          <Link
            style={{ color: "#bdada0" }}
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about">
            Gameboards
          </Link>
        </h1>
        <h2 className="text-center">Written by Gabriel Koeb</h2>
        <h2 className="text-center">Click above to enter</h2>
      </div>
    </main>
  );
}
