import { Rank } from "./Rank";
import styles from "./Board.module.css";

export function Board() {
  const position = [
    ["r", "n", "b", "q", "k", "b", "n", "r"], // 8th rank
    ["p", "p", "p", "p", "p", "p", "p", "p"], // 7th rank
    ["", "", "", "", "", "", "", ""], // 6th rank
    ["", "", "", "", "", "", "", ""], // 5th rank
    ["", "", "", "", "", "", "", ""], // 4th rank
    ["", "", "", "", "", "", "", ""], // 3rd rank
    ["P", "P", "P", "P", "P", "P", "P", "P"], // 2nd rank
    ["R", "N", "B", "Q", "K", "B", "N", "R"], // 1st rank
  ];

  return (
    <div className={styles.Board}>
      {position.map((row, rankIndex) => {
        const rank = 8 - rankIndex;

        return <Rank key={rank} rank={rank} files={row} />;
      })}
    </div>
  );
}
