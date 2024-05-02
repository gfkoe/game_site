"use client";
import React, { useState, useEffect } from "react";
import Tictactoe from "../../components/tictactoe"; // Import the tictactoe component

export default function TicTacToe() {
  return (
    <main className="container">
      <Tictactoe /> {/* Use the tictactoe component as a self-closing tag */}
    </main>
  );
}
