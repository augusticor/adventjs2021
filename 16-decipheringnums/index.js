const decodeNumber = (symbols = '') => {
  const regex = new RegExp('[^.,:;!]', 'g');
  if (regex.test(symbols)) return NaN;

  const values = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 };
  let total = 0;
  let currentSymbolValue = '';

  for (let i = 0; i < symbols.length; i++) {
    currentSymbolValue = values[symbols.charAt(i)];
    total += values[symbols.charAt(i + 1)] > currentSymbolValue ? currentSymbolValue * -1 : currentSymbolValue;
  }

  return total;
};

// TESTS
console.log(decodeNumber('...')); // 3
console.log(decodeNumber('.,')); // 4 (5 - 1)
console.log(decodeNumber(',.')); // 6 (5 + 1)
console.log(decodeNumber(',...')); // 8 (5 + 3)
console.log(decodeNumber('.........!')); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumber('.;')); // 49 (50 - 1)
console.log(decodeNumber('..,')); // 5 (-1 + 1 + 5)
console.log(decodeNumber('..,!')); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumber('.;!')); // 49 (-1 -50 + 100)
console.log(decodeNumber('!!!')); // 300
console.log(decodeNumber(';!')); // 50
console.log(decodeNumber(';.W')); // NaN
console.log(decodeNumber(',...dasdada')); // NaN
