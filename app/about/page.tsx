"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function About() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-start p-12">
      <div className="container flex flex-col items-start">
        <p>My name is Gabriel Koeb, and I am a senior in Computer Science.</p>
        <p>
          I am building this website as a way to explore more about web
          technologies, specifically React, TailwindCSS, and Next.JS 14.
        </p>
        <br />
        <p>Check out the Games Below! They are implemented using React</p>
      </div>
      <br />
      <div className="container flex flex-row items-start">
        <div className="container flex flex-col items-center rounded-lg bg-inherit w-2/6 h-2/6 border-2 game-box">
          <p>Tic-Tac-Toe</p>
          <br />
          <Link
            key="link"
            href="/games/tic-tac-toe"
            className="hover:scale-110 hover:duration-300 duration-300"
          >
            <Image
              className="hover:scale-110 hover:duration-300 duration-300"
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
          <p>Connect 4</p>
          <br />
          <Link
            key="link"
            href="/games/connect-4"
            className="hover:scale-110 hover:duration-300 duration-300"
          >
            <p>Click here to go to Connect-4!</p>
          </Link>
        </div>{" "}
        <div className="container flex flex-col items-center rounded-lg bg-inherit w-2/6 h-2/6 border-2 game-box">
          <p>Conway&#39;s Game of Life</p>
          <br />
          <Link
            key="link"
            href="/games/game-of-life"
            className="hover:scale-110 hover:duration-300 duration-300"
          >
            <p>Click here to go to Conway&#39;s Game of Life!</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
