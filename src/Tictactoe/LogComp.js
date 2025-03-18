import styles from "./game.module.css";
import { GiSnitchQuidditchBall } from "react-icons/gi";
import { FaBroom } from "react-icons/fa";

export default function Log({ turns }) {
  return (
    <ol className={styles.log}>
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player === "X" ? <GiSnitchQuidditchBall/> : <FaBroom/>} selected {turn.square.row}
          {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
