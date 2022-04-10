import React from "react";

const Square = ({ value, chooseSquare }) => {
  return (
    <div className="square title" onClick={() => chooseSquare()}>
      {value}
    </div>
  );
};

export default Square;
