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
  function checkWinner(row: number, col: number, board: string[][]): void {
    // throw new Error("Function not implemented.");
    let count = 1;
    let checkArray = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
    ];
    checkArray.forEach((element) => {
      //
      initialCheck(count, row, col, element[0], element[1], board);
    });
  }

  function initialCheck(
    count: number,
    row: number,
    col: number,
    checkRow: number,
    checkCol: number,
    board: string[][]
  ) {
    let newCount = 1;
    if (count === 4) {
      props.setIsWinner(true);
    }
    let newRow = row + checkRow;
    let newCol = col + checkCol;
    if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7) {
      if (board[newRow][newCol] === props.currentPlayer) {
        count++;
        initialCheck(count, newRow, newCol, checkRow, checkCol, board);
      } else {
        secondaryCheck(newCount, row, col, checkRow, checkCol, board);
      }
    }
  }
  function secondaryCheck(
    count: number,
    row: number,
    col: number,
    checkRow: number,
    checkCol: number,
    board: string[][]
  ) {
    if (count === 4) {
      props.setIsWinner(true);
    }
    let newRow = row - checkRow;
    let newCol = col - checkCol;

    if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7) {
      if (board[newRow][newCol] === props.currentPlayer) {
        count++;
        secondaryCheck(count, newRow, newCol, checkRow, checkCol, board);
      }
    }
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

  return (
    <div className="c4-item" onClick={handleClick}>
      {props.board[props.i][props.j] === "X" ? (
        <div className="x-token"></div>
      ) : (
        <>
          {props.board[props.i][props.j] === "O" ? (
            <div className="o-token"></div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
}
