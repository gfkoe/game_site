import React from "react";

export default function ConnectFourSquare({
  setBoard,
  i,
  j,
  currentPlayer,
  setCurrentPlayer,
  board,
  setIsWinner,
  isWinner,
}: {
  setBoard: any;
  i: number;
  j: number;
  currentPlayer: string;
  setCurrentPlayer: any;
  board: any;
  setIsWinner: any;
  isWinner: boolean;
}) {
  function handleClick(): void {
    if (!isWinner) {
      changeTurn();
    }
  }
  function changeTurn(): void {
    let tempBoard: string[][] = [...board];
    for (let i = 5; i >= 0, --i) {}
  }
  return <div></div>;
}
