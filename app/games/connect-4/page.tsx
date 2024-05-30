"use client";
import React, { useState } from "react";
import ConnectFourBoard from "components/ConnectFourBoard";
export default function Connect4() {
  return (
    <main className="flex flex-col items-center min-h-[90vh]">
      <ConnectFourBoard />
    </main>
  );
}
