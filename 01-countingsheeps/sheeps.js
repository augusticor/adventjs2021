const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' },
];

const contarOvejas = (ovejas) => {
  const regexa = new RegExp('a', 'gi');
  const regexn = new RegExp('n', 'gi');

  return ovejas.filter(({ name, color }) => color === 'rojo' && regexa.test(name) && regexn.test(name));
};

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
