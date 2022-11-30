const isValid = (letter = '') => {
  const validParentheses = new RegExp('[{}\\[\\]]', 'g');

  if (validParentheses.test(letter)) return false;

  if (letter.replace(/[^\(|^\)]/g, '').length % 2 !== 0) return false;

  const validGiftInsideParentheses = new RegExp('\\([A-zÀ-ú]+\\)', 'g');

  return validGiftInsideParentheses.test(letter);
};

const test1 = 'bici coche (balón) bici coche peluche'; // -> ✅
const test2 = '(muñeca) consola bici'; // ✅
const test3 = 'bici coche (balón bici coche'; // -> ❌
const test4 = 'peluche (bici [coche) bici coche balón'; // -> ❌
const test5 = '(peluche {) bici'; // -> ❌
const test6 = '() bici'; // ❌
const test7 = '(()) bici'; // ❌
const test8 = '(a() bici (a)'; // ❌
const test9 = 'bici coche balón bici coche peluche'; // -> ✅

console.log(isValid(test1));
console.log(isValid(test2));
console.log(isValid(test3));
console.log(isValid(test4));
console.log(isValid(test5));
console.log(isValid(test6));
console.log(isValid(test7));
