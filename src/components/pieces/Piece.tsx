import type { Piece } from "../../common";

interface PieceComponentProps {
  piece: Piece;
}

export function Piece({ piece }: PieceComponentProps) {
  switch (piece) {
    case "p":
      return <img width="55%" src="/pieces/bp.svg" />;
    case "n":
      return <img width="70%" src="/pieces/bn.svg" />;
    case "b":
      return <img width="80%" src="/pieces/bb.svg" />;
    case "r":
      return <img width="70%" src="/pieces/br.svg" />;
    case "q":
      return <img width="85%" src="/pieces/bq.svg" />;
    case "k":
      return <img width="80%" src="/pieces/bk.svg" />;
    case "P":
      return <img width="55%" src="/pieces/wp.svg" />;
    case "N":
      return <img width="70%" src="/pieces/wn.svg" />;
    case "B":
      return <img width="80%" src="/pieces/wb.svg" />;
    case "R":
      return <img width="70%" src="/pieces/wr.svg" />;
    case "Q":
      return <img width="85%" src="/pieces/wq.svg" />;
    case "K":
      return <img width="80%" src="/pieces/wk.svg" />;
    default:
      return null;
  }
}
