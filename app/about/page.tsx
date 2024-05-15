"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Header from "../components/Header";
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
          technologies, specifically React, TailwindCSS, and Next.JS 14.
        </p>
        <br />
        <br />

        <div className="container external-sites">
          <p>Below are some links to my other pages:</p>
          <a href="https://github.com/gfkoe">Github</a>
          &nbsp;
          <a href="https://linkedin.com/in/gabriel-koeb">Linkedin</a>
        </div>
        <br />
      </div>
      <div className="flex flex-col items-center">
        <p>Below are some games that I have implemented in React!</p>
      </div>
      <br />
      <div className="container flex flex-row items-start">
        <div className="container flex flex-col items-center rounded-lg bg-inherit w-2/6 h-2/6 border-2 game-box">
          <p>Tic-Tac-Toe</p>
          <br />
          <Link
            key="link"
            href="/games/tic-tac-toe"
            className="hover:scale-110 hover:duration-300 duration-300 hover:shadow-lg">
            <Image
              className="hover:scale-110 hover:duration-300 duration-300 hover:shadow-lg"
              src="/tic-tac-toe.png"
              alt="Tic-Tac-Toe"
              width={200}
              height={200}
              priority={true}
            />
          </Link>
          <br />
        </div>{" "}
        <div className="container flex flex-col items-center rounded-lg bg-inherit w-2/6 h-2/6 border-2 game-box">
          <p>Game2PH</p>
        </div>{" "}
        <div className="container flex flex-col items-center rounded-lg bg-inherit w-2/6 h-2/6 border-2 game-box">
          <p>Game3PH</p>
        </div>
      </div>
    </main>
  );
}
