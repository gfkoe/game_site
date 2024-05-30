import React from "react";
import { useState } from "react";
import ConnectFourSquare from "./ConnectFourSquare";
export default function ConnectFourBoard() {
  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: 7 }, () => Array.from({ length: 6 }, () => ""))
  );
  console.log(board);
  // const [board, setBoard] = useState([
  //   ["", "", "", "", "", "", ""],
  //   ["", "", "", "", "", "", ""],
  //   ["", "", "", "", "", "", ""],
  //   ["", "", "", "", "", "", ""],
  //   ["", "", "", "", "", "", ""],
  //   ["", "", "", "", "", "", ""],
  // ]);
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const gameBoard = board.map((row, i) => {
    return row.map((value, j) => {
      return (
        <ConnectFourSquare
          key={i + "" + j}
          setBoard={setBoard}
          i={i}
          j={j}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          board={board}
          setIsWinner={setIsWinner}
          isWinner={isWinner}
        />
      );
    });
  });
  return <div className="flex items-center justify-center">{gameBoard}</div>;
}
