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
      <div className="typewriter-container flex flex-col items-center">
        {showWelcome && (
          <div className="text-6xl">
            <Link
              key="link"
              href="/about"
              style={{ color: "#bdada0" }}
              className={`link ${pathname === "/about" ? "active" : ""}`}>
              <Typewriter text="Welcome to Gameboards" speed={50} />
            </Link>
          </div>
        )}
        {showAuthor && (
          <div className="">
            <Typewriter text="Written by Gabriel Koeb" speed={50} />
          </div>
        )}

        {showClick && (
          <div className="">
            <Typewriter text="Click above to enter" speed={50} />
          </div>
        )}
      </div>
    </main>
  );
}
