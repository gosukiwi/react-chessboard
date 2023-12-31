import classes from "classnames";
import type { Rank, File, Piece } from "../common";
import { Piece } from "./pieces/Piece";
import styles from "./Square.module.css";

const getSquareColor = (rank: Rank, file: File) => {
  if (rank % 2 == 0) {
    return file % 2 === 0 ? "dark" : "light";
  } else {
    return file % 2 === 1 ? "dark" : "light";
  }
};

interface SquareProps {
  rank: Rank;
  file: File;
  value: Piece;
}

export function Square({ rank, file, value }: SquareProps) {
  const color = getSquareColor(rank, file);

  return (
    <div className={classes(styles.Square, styles[color])}>
      <Piece piece={value} />
    </div>
  );
}
