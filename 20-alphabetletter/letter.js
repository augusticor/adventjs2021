const pangram = (letter = '') => {
  const regex = new RegExp('[a-zñáéíóúäëïöü]', 'gi');

  const alphabetSet = new Set(letter.match(regex));

  return alphabetSet.size >= 27;
};

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')); // true
console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')); // false
console.log(pangram('De la a a la z, nos faltan letras')); // false
