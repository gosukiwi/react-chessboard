import type { Piece } from "../../common";
import BlackPawn from "../../assets/pieces/bp.svg?react";
import BlackKnight from "../../assets/pieces/bn.svg?react";
import BlackBishop from "../../assets/pieces/bb.svg?react";
import BlackRook from "../../assets/pieces/br.svg?react";
import BlackQueen from "../../assets/pieces/bq.svg?react";
import BlackKing from "../../assets/pieces/bk.svg?react";
import WhitePawn from "../../assets/pieces/wp.svg?react";
import WhiteKnight from "../../assets/pieces/wn.svg?react";
import WhiteBishop from "../../assets/pieces/wb.svg?react";
import WhiteRook from "../../assets/pieces/wr.svg?react";
import WhiteQueen from "../../assets/pieces/wq.svg?react";
import WhiteKing from "../../assets/pieces/wk.svg?react";

interface PieceComponentProps {
  piece: Piece;
}

export function Piece({ piece }: PieceComponentProps) {
  switch (piece) {
    case "p":
      return <BlackPawn width="55%" />;
    case "n":
      return <BlackKnight width="70%" />;
    case "b":
      return <BlackBishop width="80%" />;
    case "r":
      return <BlackRook width="70%" />;
    case "q":
      return <BlackQueen width="85%" />;
    case "k":
      return <BlackKing width="80%" />;
    case "P":
      return <WhitePawn width="55%" />;
    case "N":
      return <WhiteKnight width="70%" />;
    case "B":
      return <WhiteBishop width="80%" />;
    case "R":
      return <WhiteRook width="70%" />;
    case "Q":
      return <WhiteQueen width="85%" />;
    case "K":
      return <WhiteKing width="80%" />;
    default:
      return null;
  }
}
