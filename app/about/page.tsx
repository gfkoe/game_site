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
          technoligies, specifically React, TailwindCSS, and Next.JS 14.
        </p>
        <br />
        <br />

        <div className="container external-sites">
          <p>Below are some links to my other pages:</p>
          <a href="https://github.com/gfkoe">Github</a>
          &nbsp;
          <a href="https://linkedin.com/in/gabriel-koeb">Linkedin</a>
        </div>
      </div>

      <div className="container flex flex-row items-start">
        <div className="container flex flex-col items-center rounded-lg bg-inherit w-2/6 h-2/6 border-2 game-box">
          <p>Tic-Tac-Toe</p>
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
