import React from "react";
import { useState } from "react";

function game(board: number[][]): void {
  const neighbors = [
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];
  const rows: number = board.length;
  const cols: number = board[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const neighbors = getNeighborsCount(board, i, j);

      if (board[i][j]) {
        if (neighbors == 2 || neighbors == 3) {
          board[i][j] = 3;
        } else {
          board[i][j] = 1;
        }
      } else if (neighbors == 3) {
        board[i][j] = 2;
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cellVal = board[i][j];
      if (cellVal === 2 || cellVal === 3) {
        board[i][j] = 1;
      } else if (cellVal === 1) {
        board[i][j] = 0;
      }
    }
  }
}

function getNeighborsCount(board: number[][], i: number, j: number): number {
  let neighbors = 0;
  for (let r = -1; r <= 1; r++) {
    for (let c = -1; c <= 1; c++) {
      const row = i + r;
      const col = j + c;

      if (
        row >= 0 &&
        col >= 0 &&
        row <= board.length - 1 &&
        col <= board[0].length - 1
      ) {
        const val = board[row][col];
        if (i === row && j === col) {
          continue;
        } else if (val === 1 || val === 3) {
          neighbors++;
        }
      }
    }
  }
  return neighbors;
}
export default function GameOfLife() {
  return <div>hello</div>;
}
