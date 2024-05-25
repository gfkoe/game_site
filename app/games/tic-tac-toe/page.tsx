"use client";
import React, { useState, useEffect } from "react";
import Tictactoe from "components/Tictactoe";

export default function TicTacToe() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <br />
      <Tictactoe /> {/* Use the tictactoe component as a self-closing tag */}
    </main>
  );
}
