import styles from "./game.module.css";
import { GiSnitchQuidditchBall } from "react-icons/gi";
import { FaBroom } from "react-icons/fa";
/**
 * GameBoard component renders the game board for a tic-tac-toe game.
 * @param {function} onSelectSquare - Function to handle square selection.
 * @param {Array} board - 2D array representing the game board state.
 */

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol className={styles.gameBoard}>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* Call onSelectSquare with the row and column indices when the 
                button is clicked */}
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {/* Disable the button if the cell already has a player symbol */}
                  {
                    // Render the correct icon based on the symbol
                    playerSymbol === "X" && <GiSnitchQuidditchBall />
                  }
                  {playerSymbol === "O" && <FaBroom />}
                </button>{" "}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
