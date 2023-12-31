import { Rank } from "./Rank";
import { parseFEN } from "../lib/fen";
import styles from "./Board.module.css";

interface BoardProps {
  FEN?: string;
}

export function Board({ FEN }: BoardProps) {
  const position = parseFEN(FEN);

  return (
    <div className={styles.Board}>
      {position.map((row, rankIndex) => {
        const rank = 8 - rankIndex;

        return <Rank key={rank} rank={rank} files={row} />;
      })}
    </div>
  );
}
