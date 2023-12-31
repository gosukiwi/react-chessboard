import type { Rank } from "../common";
import { Square } from "./Square";
import styles from "./Rank.module.css";

interface RankProps {
  rank: Rank;
  files: string[];
}

export function Rank({ rank, files }: RankProps) {
  return (
    <div className={styles.Rank}>
      {files.map((piece, fileIndex) => {
        const file = fileIndex + 1;
        const key = `${rank}${file}`;

        return <Square key={key} rank={rank} file={file} piece={piece} />;
      })}
    </div>
  );
}
