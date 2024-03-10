"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Typewriter from "./components/Typewriter";
export default function Home() {
  const pathname = usePathname();
  return (
    <main className="flex flex-col p-24 items-center justify-center h-screen">
      <div className="container flex flex-col align-middle items-center justify-center">
        <h2 className="text-center text-6xl">
          <Link
            key="link"
            href="/about" 
            style={{ color: "#bdada0" }}
            className={`link ${pathname === "/about" ? "active" : ""}`}>
            <Typewriter text="Welcome to Gameboards" speed={50} />
          </Link>
        </h2>
        <h2 className="text-center">Written by Gabriel Koeb</h2>
        <h2 className="text-center">Click above to enter</h2>
      </div>
    </main>
  );
}
