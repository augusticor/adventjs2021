// ***************** TESTS *****************
// TEST 1
const easyStore = {
  pra: 'somestring',
  prb: 'chocolate',
  prc: 'soda',
};

// console.log(contains(easyStore, 'soda')); // true
// console.log(contains(easyStore, 'cake')); // false

// TEST 2
const medStore = {
  pra: 'somestring',
  prb: 'chocolate',
  prc: 'soda',
  caj1: {
    praa: 'cake',
    prab: 'water',
    prac: 'bread',
  },
};

// console.log(contains(medStore, 'water')); // true
// console.log(contains(medStore, 'fish')); // false

// TEST 3
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

// console.log(contains(almacen, 'camiseta')); // true
// console.log(contains(almacen, 'cake')); // false

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
