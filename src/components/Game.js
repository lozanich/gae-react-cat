import React, { useState } from "react";
import { Board } from "./Board";
import { History } from "./History";

export const Game = () => {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
  });

  const { history } = state;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${state.xIsNext ? "X" : "O"}`;
  }

  const handleClickBoard = (i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    });
  };

  const jumpTo = (step) => {
    setState({
      history,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  };

  const handleRestartGame = () => {
    setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  };

  return (
    <>
      <div className="game__container">
        <h1>Gato</h1>
        <hr></hr>
        <button onClick={handleRestartGame}>Reiniciar</button>
      </div>
      <div className="game">
        <div>
          <Board
            squares={current}
            xIsNext={state.xIsNext}
            status={status}
            onClick={handleClickBoard}
          />
        </div>
      </div>
      <div className="game__container">
        <History history={history} jumpTo={jumpTo} />
      </div>
    </>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
