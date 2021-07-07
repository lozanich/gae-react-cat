import React from "react";

export const History = ({ history, jumpTo }) => {
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <div key={move} className="container__vertical">
        <div className="history__margin">
          <button className="btn btn-success" onClick={() => jumpTo(move)}>
            {desc}
          </button>
        </div>
        <div className="history__margin">
          {step.squares.map((item, index) => {
            return (
              <div key={index}>
                <span className="history__span">{item ? item : ""}</span>
                {(index === 2 && <br></br>) ||
                  (index === 5 && <br></br>) ||
                  (index === 8 && <br></br>)}
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return <>{moves}</>;
};
