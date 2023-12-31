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

export const parseFEN = (FEN: string | undefined): Position => {
  if (!FEN) return EMPTY_POSITION;

  const ranks = FEN.split("/");
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
