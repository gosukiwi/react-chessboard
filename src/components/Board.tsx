import { Rank } from "./Rank";
import styles from "./Board.module.css";

export function Board() {
  const position = [
    ["", "b", "", "", "", "", "", ""], // 8th rank
    ["p", "", "", "", "", "", "", ""], // 7th rank
    ["", "", "", "", "", "", "", ""], // 6th rank
    ["", "", "", "", "", "", "", ""], // 5th rank
    ["", "", "", "", "", "", "", ""], // 4th rank
    ["", "", "", "", "", "", "", ""], // 3rd rank
    ["P", "", "", "", "", "", "", ""], // 2nd rank
    ["", "", "", "", "", "", "", ""], // 1st rank
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
