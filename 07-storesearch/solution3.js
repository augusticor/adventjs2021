const contains = (store = {}, product = '') => {
  for (const key in store) {
    if (store[key] === product) return true;

    if (typeof store[key] === 'object') {
      if (contains(store[key], product)) return true;

      continue;
    }
  }

  return false;
};

// ***************** TESTS *****************
// TEST 1
const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta', // <- ¡Está aquí!
    },
  },
};

console.time('Execution time');
console.log(contains(almacen, 'camiseta')); // true - AVG 9.1912ms
console.timeEnd('Execution time');
// console.log(contains(almacen, 'cake')); // false

// TEST 2
const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando',
    },
  },
};

// console.log(contains(otroAlmacen, 'gameboy')); // false
// console.log(contains(otroAlmacen, 'cd-rom')); // true
