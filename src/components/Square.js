import React from "react";

export const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};
