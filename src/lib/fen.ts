import {
  parseSquareName,
  SquareName,
  Position,
  Player,
  CastlingRights,
  GameState,
} from "../common";

const EMPTY_POSITION: Position = [
  ["", "", "", "", "", "", "", ""], // 8th rank
  ["", "", "", "", "", "", "", ""], // 5th rank
  ["", "", "", "", "", "", "", ""], // 6th rank
  ["", "", "", "", "", "", "", ""], // 5th rank
  ["", "", "", "", "", "", "", ""], // 4th rank
  ["", "", "", "", "", "", "", ""], // 3rd rank
  ["", "", "", "", "", "", "", ""], // 2th rank
  ["", "", "", "", "", "", "", ""], // 1th rank
];

const isNumber = (character: string) => {
  const number = parseInt(character, 10);
  if (isNaN(number)) return false;
  if (number < 1 || number > 8) return false;

  return true;
};

const isValidPiece = (character: string) => {
  const valid = ["p", "n", "b", "r", "q", "k"];
  return valid.includes(character.toLowerCase());
};

const getPosition = (pieces: string): Position => {
  const ranks = pieces.split("/");
  if (ranks.length !== 8) throw new Error("Invalid FEN. Must have 8 ranks.");

  const position = ranks.map((file) => {
    const pieces = [];
    for (const character of file) {
      if (isNumber(character)) {
        const number = parseInt(character, 10);
        for (let i = 0; i < number; i++) {
          pieces.push("");
        }
      } else {
        if (!isValidPiece(character)) {
          throw new Error(`Invalid FEN. Invalid piece: ${character}`);
        }

        pieces.push(character);
      }
    }

    return pieces;
  });

  return position;
};

const getTurn = (turn: string): Player => {
  if (turn !== "w" && turn !== "b") throw new Error(`Invalid turn: ${turn}`);

  return turn === "w" ? "WHITE" : "BLACK";
};

const getCastlingRights = (castlingRights: string): CastlingRights => {
  return {
    Black: {
      Queenside: castlingRights.includes("q"),
      Kingside: castlingRights.includes("k"),
    },
    White: {
      Queenside: castlingRights.includes("Q"),
      Kingside: castlingRights.includes("K"),
    },
  };
};

const getEnPassant = (name: string): SquareName | null => {
  if (name === "-") return null;
  return parseSquareName(name);
};

const getCounter = (counter: string): number => {
  const number = parseInt(counter, 10);
  if (isNaN(number)) throw new Error(`Invalid counter: ${counter}`);

  return number;
};

export const parseFEN = (FEN: string | undefined): GameState => {
  if (!FEN) return EMPTY_POSITION;

  const [
    positionRaw,
    turnRaw,
    castlingRightsRaw,
    enPassantRaw,
    halfMoveCounterRaw,
    fullMoveCounterRaw,
  ] = FEN.split(" ");

  const position = getPosition(positionRaw);
  const turn = getTurn(turnRaw);
  const castlingRights = getCastlingRights(castlingRightsRaw);
  const enPassant = getEnPassant(enPassantRaw);
  const halfMoveCounter = getCounter(halfMoveCounterRaw);
  const fullMoveCounter = getCounter(fullMoveCounterRaw);

  return {
    position,
    turn,
    castlingRights,
    enPassant,
    halfMoveCounter,
    fullMoveCounter,
  };
};
