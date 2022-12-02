// No funciona en el editor online
const canReconfigure = (from = '', to = '') => {
  if (from.length !== to.length) return false;

  for (let i = 1; i < to.length; i++) {
    if (to.charAt(i - 1) === to.charAt(i) || from.charAt(i - 1) === from.charAt(i) || from.charAt(i - 1) === from.charAt(i)) return false;
  }

  return true;
};

console.log(canReconfigure('BAL', 'LIB')); // true
console.log(canReconfigure('CON', 'JUU')); // false
console.log(canReconfigure('XBOX', 'XXBO')); // false
console.log(canReconfigure('XBOX', 'XOBX')); // true
console.log(canReconfigure('MMM', 'MID')); // false
console.log(canReconfigure('AA', 'MID')); // false -> no tiene la misma longitud
