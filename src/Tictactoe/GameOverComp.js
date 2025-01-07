import styles from "./game.module.css";

export default function GameOver({ winner, rematch }) {
  return (
    <div className={styles.gameOver}>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p> It&apos;s a draw!</p>}
      <p>
        <button onClick={rematch}>Play once again</button>
      </p>
    </div>
  );
}
