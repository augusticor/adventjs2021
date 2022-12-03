const canMouseEat = (direction, game) => {
  let mouse = [0, 0];

  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[0].length; j++) {
      if (game[i][j] === 'm') mouse = [i, j];
    }
  }

  const [row, column] = mouse;

  if (direction === 'up') {
    return game[row - 1][column] === '*';
  } else if (direction === 'down') {
    return game[row + 1][column] === '*';
  } else if (direction === 'right') {
    return game[row][column + 1] === '*';
  }
  // left
  return game[row][column - 1] === '*';
};

// TESTS
const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
];

console.log(canMouseEat('up', room)); // false
console.log(canMouseEat('down', room)); // true
console.log(canMouseEat('right', room)); // false
console.log(canMouseEat('left', room)); // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
];

console.log();
console.log(canMouseEat('up', room2)); // false
console.log(canMouseEat('down', room2)); // false
console.log(canMouseEat('right', room2)); // true
console.log(canMouseEat('left', room2)); // false
