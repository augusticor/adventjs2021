const countPackages = (carriers = [], carrierID = '') => {
  const carrierAtIndex = carriers.at(carriers.findIndex((carr) => carr[0] === carrierID));
  const carrierEmployees = carrierAtIndex.at(2);

  let totalCarryEmployees = 0;
  for (const carrier of carrierEmployees) {
    totalCarryEmployees += countPackages(carriers, carrier);
  }

  return totalCarryEmployees + carrierAtIndex.at(1);
};

// TESTS;
const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []],
];

console.log(countPackages(carriers, 'dapelu')); // 9: 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []],
];

console.log(countPackages(carriers2, 'camila')); // 15: 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
