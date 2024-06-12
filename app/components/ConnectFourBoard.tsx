import React from "react";
import { useState, useEffect } from "react";
import ConnectFourSquare from "./ConnectFourSquare";
export default function ConnectFourBoard() {
  // const [board, setBoard] = useState<string[][]>(
  //   Array.from({ length: 7 }, () => Array.from({ length: 6 }, () => ""))
  // );
  // console.log(board);
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
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
  return (
    //TODO: Refactor this to not copy code
    <div className="main-Page-Container">
      <br />
      <div className="player-container">
        <h1 className="text-center">Current Player: </h1>
        {currentPlayer === "X" ? (
          <div className="x-token"></div>
        ) : (
          <div className="o-token"></div>
        )}
      </div>

      <div className="cf-Container">{gameBoard}</div>
      <br />
      {isWinner ? (
        <div className="player-container">
          <h1>Winner: </h1>
          {currentPlayer === "X" ? (
            <div className="o-token"></div>
          ) : (
            <div className="x-token"></div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
