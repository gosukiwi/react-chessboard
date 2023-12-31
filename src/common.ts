export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type File = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Piece =
  | ""
  | "p"
  | "P"
  | "n"
  | "N"
  | "b"
  | "B"
  | "r"
  | "R"
  | "q"
  | "Q"
  | "k"
  | "K";

// Square name in algebraic notation
export type SquareName =
  | "a1"
  | "a2"
  | "a3"
  | "a4"
  | "a5"
  | "a6"
  | "a7"
  | "a8"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "b5"
  | "b6"
  | "b7"
  | "b8"
  | "c1"
  | "c2"
  | "c3"
  | "c4"
  | "c5"
  | "c6"
  | "c7"
  | "c8"
  | "d1"
  | "d2"
  | "d3"
  | "d4"
  | "d5"
  | "d6"
  | "d7"
  | "d8"
  | "e1"
  | "e2"
  | "e3"
  | "e4"
  | "e5"
  | "e6"
  | "e7"
  | "e8"
  | "f1"
  | "f2"
  | "f3"
  | "f4"
  | "f5"
  | "f6"
  | "f7"
  | "f8"
  | "g1"
  | "g2"
  | "g3"
  | "g4"
  | "g5"
  | "g6"
  | "g7"
  | "g8"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h7"
  | "h8";

export const parseSquareName = (name: string): SquareName => {
  if (name.length !== 2) {
    throw new Error(`Invalid algebraic notation: ${name}`);
  }

  const [file, rank] = name;
  if (!["a", "b", "c", "d", "e", "f", "g", "h"].includes(file)) {
    throw new Error(`Invalid file: ${file}`);
  }

  const rankNumber = parseInt(rank, 10);
  if (isNaN(rankNumber) || rankNumber < 0 || rankNumber > 8) {
    throw new Error(`Invalid rank: ${rankNumber}`);
  }

  return name;
};

export type Position = string[][];
export type Player = "WHITE" | "BLACK";
export interface CastlingRights {
  Black: {
    Queenside: boolean;
    Kingside: boolean;
  };
  White: {
    Queenside: boolean;
    Kingside: boolean;
  };
}

export interface GameState {
  position: Position;
  turn: Player;
  castlingRights: CastlingRights;
  enPassant: SquareName;
  halfMoveCounter: number;
  fullMoveCounter: number;
}
