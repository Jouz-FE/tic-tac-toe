import React, { useState, Fragment } from "react";
import "./board.styles.css";
import Square from "./square.component";

const Board = () => {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    whoIsPlayer: "X",
  });
  const handleClick = (e) => {
    const { id } = e.target;
    const { squares, whoIsPlayer } = state;
    const copySquare = [...squares];
    if (copySquare[id]) {
      alert(
        `Player ${whoIsPlayer === "X" ? "Y" : "X"} already taken this square`
      );
      return;
    }
    copySquare[id] = whoIsPlayer;
    setState({
      squares: copySquare,
      whoIsPlayer: whoIsPlayer === "X" ? "Y" : "X",
    });
    // return () => getWinner(copySquare);
  };
  const getWinner = (squares) => {
    const victoryCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(victoryCondition.length);
    for (let i = 0; i < victoryCondition.length; i++) {
      console.log(i);
      const [first, second, third] = victoryCondition[i];
      console.log(first, second, third);
      console.log(squares[first], squares[second], squares[third]);
      if (
        squares[first] &&
        squares[first] === squares[second] &&
        squares[second] === squares[third]
      ) {
        return squares[first];
        break;
      }
    }
    return null;
  };
  const handleReset = () => {
    setState({
      squares: Array(9).fill(null),
      whoIsPlayer: "X",
    });
  };
  const { squares, whoIsPlayer } = state;
  const setSqrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const square = setSqrNum.map((el) => (
    <Square
      key={el}
      id={el}
      val={squares[el]}
      onHandleClick={(el) => handleClick(el)}
    />
  ));
  //   const winner = getWinner(squares) === true;
  //   const victory = winner === true && whoIsPlayer === "X" ? "Y" : "X";
  const winner = getWinner(squares);
  console.log(winner);
  return (
    <>
      <div className="board">
        <div>
          {winner === "X" || winner === "Y"
            ? `WINNER IS PLAYER: ${winner}`
            : `Player: ${whoIsPlayer}`}{" "}
        </div>
        <div className="board__row">{square}</div>
      </div>
      <button onClick={handleReset}>RESTART THE GAME</button>
    </>
  );
};

export default Board;
