import { useState } from "react";
import styles from "./game.module.css";
import { GiSnitchQuidditchBall } from "react-icons/gi";
import { FaBroom } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDone } from "react-icons/md";

/**
 * Player component represents a player in the game with the ability to edit their name.
 * @param {string} name - The initial name of the player.
 * @param {string} symbol - The symbol associated with the player (e.g., 'X' or 'O').
 * @param {boolean} isActive - Indicates if the player is currently active.
 * @param {function} onChangeName - Function to handle name change.
 */
export default function Player({ name, symbol, isActive, onChangeName }) {
  // State to track if the name is being edited
  const [isEditing, setIsEditing] = useState(false);
  // State to track the player's name
  const [playerName, setPlayerName] = useState(name);

  /**
   * Toggle the editing state and call onChangeName if editing is being stopped.
   */
  function handleEditing() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  /**
   * Update the playerName state with the new value from the input field.
   * @param {object} event - The event object from the input field.
   */
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? styles.active : undefined}>
      <span className={styles.player}>
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className={styles.playerName}>{playerName}</span>
        )}

        <span className={styles.playerSymbol}>
          {symbol === "X" ? <GiSnitchQuidditchBall/> : <FaBroom/>}
        </span>
      </span>
      <button className={styles.editBtn} onClick={handleEditing}>
        {isEditing ? <MdDone/> : <RiEdit2Fill/>}
      </button>
    </li>
  );
}
