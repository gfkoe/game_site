"use client";
import React, { useState } from "react";
import GameOfLife from "components/GameOfLife";
export default function Conways() {
  return (
    <main className="flex flex-col items-center min-h-[90vh]">
      <GameOfLife />
    </main>
  );
}
