"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Typewriter from "./components/Typewriter";
export default function Home() {
  const pathname = usePathname();
  const [showWelcome, setShowWelcome] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);
  const [showClick, setShowClick] = useState(false);

  useEffect(() => {
    const welcomeTimeout = setTimeout(() => {
      setShowWelcome(true);
    }, 1000);
    const authorTimeout = setTimeout(() => {
      setShowAuthor(true);
    }, 3000);
    const clickTimeout = setTimeout(() => {
      setShowClick(true);
    }, 5000);

    return () => {
      clearTimeout(welcomeTimeout);
      clearTimeout(authorTimeout);
      clearTimeout(clickTimeout);
    };
  }, []);
  return (
    <main className="flex flex-col p-24 items-center justify-center h-screen">
      <div className="container flex flex-col align-middle items-center justify-center">
        {showWelcome && (
          <h2 className="text-center text-6xl">
            <Link
              key="link"
              href="/about"
              style={{ color: "#bdada0" }}
              className={`link ${pathname === "/about" ? "active" : ""}`}
            >
              <Typewriter text="Welcome to Gameboards" speed={50} />
            </Link>
          </h2>
        )}
        {showAuthor && (
          <h2 className="text-center">
            <Typewriter text="Written by Gabriel Koeb" speed={50} />
          </h2>
        )}

        {showClick && (
          <h2 className="text-center">
            <Typewriter text="Click above to enter" speed={50} />
          </h2>
        )}
      </div>
    </main>
  );
}
