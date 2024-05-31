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
  function changeTurn(): void {
    let tempBoard: string[][] = [...props.board];
    for (let i = 5; i >= 0; --i) {}
  }
  return <div>test</div>;
}
