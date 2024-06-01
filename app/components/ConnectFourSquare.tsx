import React from "react";
interface squareProps {
  setBoard: any;
  i: number;
  j: number;
  currentPlayer: string;
  setCurrentPlayer: any;
  board: string[][];
  setIsWinner: any;
  isWinner: boolean;
}
export default function ConnectFourSquare(props: squareProps) {
  function handleClick(): void {
    if (!props.isWinner) {
      changeTurn();
    }
  }
  function checkWinner(row: number, col: number, board: string[][]) : void {
    throw new Error("Function not implemented.");
  }
  function changeTurn(): void {
    let tempBoard: string[][] = [...props.board];
    for (let i = 5; i >= 0; --i) {
      if (props.board[i][props.j] === "") {
        tempBoard[i][props.j] = props.currentPlayer;
        props.setBoard(tempBoard);
        if (props.currentPlayer === "X") {
          props.setCurrentPlayer("O");
        } else {
          props.setCurrentPlayer("X");
        }
        //add check for winner here
        checkWinner(i, props.j, tempBoard);
        return;
      }
    }
  }

  return <div>test</div>;
}
