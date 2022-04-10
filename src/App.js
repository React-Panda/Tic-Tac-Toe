import React, { useEffect, useState } from "react";
import "./App.scss";
import Square from "./components/Square";

const initialBoardState = ["", "", "", "", "", "", "", "", ""];

const App = () => {
  const [board, setBoard] = useState(initialBoardState);

  const [currentPlayer, setCurrentPlayer] = useState("O");

  useEffect(() => {
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  }, [board]);

  const chooseSquare = (square) => {
    if (board[square] === "") {
      setBoard(
        board.map((value, idx) => {
          if (idx === square && value === "") {
            return currentPlayer;
          }
          return value;
        })
      );
    }
  };

  const resetGame = () => {
    setBoard(initialBoardState);
    setCurrentPlayer("O");
  };

  return (
    <div>
      <h1 className="title bd-container">Tic Tac Toe</h1>
      <h1 className="title bd-container">{`${currentPlayer} - Turn`}</h1>
      <div className="container bd-container">
        <div className="board">
          <div className="row">
            <Square value={board[0]} chooseSquare={() => chooseSquare(0)} />
            <Square value={board[1]} chooseSquare={() => chooseSquare(1)} />
            <Square value={board[2]} chooseSquare={() => chooseSquare(2)} />
          </div>
          <div className="row">
            <Square value={board[3]} chooseSquare={() => chooseSquare(3)} />
            <Square value={board[4]} chooseSquare={() => chooseSquare(4)} />
            <Square value={board[5]} chooseSquare={() => chooseSquare(5)} />
          </div>
          <div className="row">
            <Square value={board[6]} chooseSquare={() => chooseSquare(6)} />
            <Square value={board[7]} chooseSquare={() => chooseSquare(7)} />
            <Square value={board[8]} chooseSquare={() => chooseSquare(8)} />
          </div>

          <div className="reset__button">
            <a href="/" onClick={resetGame}>
              Reset Game
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
