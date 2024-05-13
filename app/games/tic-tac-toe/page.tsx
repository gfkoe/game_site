"use client";
import React, { useState, useEffect } from "react";
import Tictactoe from "app/components/Tictactoe";

export default function TicTacToe() {
  return (
    <main className="container flex flex-col items-center min-h-screen">
      <Tictactoe /> {/* Use the tictactoe component as a self-closing tag */}
    </main>
  );
}
