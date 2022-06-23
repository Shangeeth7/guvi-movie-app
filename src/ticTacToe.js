import { color } from "@mui/system";
import Button from "@mui/material/Button";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import { useState } from "react";

export default function TicTacToe() {
  return (
    <div className="tic-tac-toe">
      <h1>Play a Fun game</h1>

      <Board />
    </div>
  );
}

function Board() {
  const Initial_Board = [null, null, null, null, null, null, null, null, null];
  const [board, setBoard] = useState(Initial_Board);

  const [isXTurn, setIsXTurn] = useState(true);
  const decideWinner = (board) => {
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
      console.log(a, b, c);

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log(lines[i], a, b, c);
        console.log(board);
        console.log("winner is :", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  const Restart = () => {
    setBoard(Initial_Board);
    setIsXTurn(true);
  };

  const handleClick = (index) => {
    console.log(index);
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "x" : "o";
      setBoard(boardCopy);
      // changing isXTurn to true/false
      setIsXTurn(!isXTurn);
    }
  };
  const { width, height } = useWindowSize();
  return (
    <div>
      {/* <Confetti width={width} height={height} /> */}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>winner is : {winner}</h2> : null}
      {winner ? (
        <Confetti width={width} height={height} gravity={0.03} />
      ) : null}
      <Button
        onClick={() => {
          Restart();
        }}
      >
        Restart
      </Button>
    </div>
  );
}

function GameBox({ val, onPlayerClick }) {
  const styles = {
    color: val === "x" ? "green" : "red",
  };
  return (
    <div style={styles} className="game-box" onClick={onPlayerClick}>
      {val}
    </div>
  );
}

export { TicTacToe };
