import React, { useState } from "react";
import { Board } from "./Board";

export const Game = () => {
  const [state, setState] = useState({
    history: {
      squares: Array(9).fill(null),
      xIsNext: true,
    },
  });

  const handleClickBoard = () => {
    console.log("handle click game");
  };

  return (
    <div className="game center">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
