const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const SYMBOL_TABLE = {
  ".": "10",
  "-": "11",
};

function getMorseTable() {
  const morseTable = { "**********": " " };
  for (const key in MORSE_TABLE) {
    const newKey = key.split("").map((symbol) => SYMBOL_TABLE[symbol]);
    while (newKey.join("").length < 10) {
      newKey.unshift("0");
    }
    morseTable[newKey.join("")] = MORSE_TABLE[key];
  }
  return morseTable;
}

function decode(expr) {
  const source = expr.match(/.{1,10}/g);
  const morseTable = getMorseTable();
  return source.map((key) => morseTable[key]).join("");
}

module.exports = {
  decode,
};
