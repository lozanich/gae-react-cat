import React from "react";

export const History = ({ history, jumpTo }) => {
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <div className="game-history">
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </div>
        <div className="game-history">
          {step.squares.map((item, index) => {
            return (
              <>
                <span className="square-history">{item ? item : ""}</span>
                {(index === 2 && <br></br>) ||
                  (index === 5 && <br></br>) ||
                  (index === 8 && <br></br>)}
              </>
            );
          })}
        </div>
      </li>
    );
  });

  return (
    <>
      <ol>{moves}</ol>
    </>
  );
};
