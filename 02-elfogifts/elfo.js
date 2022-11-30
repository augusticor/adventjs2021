'use strict';

const listGifts = (letter) => {
  const gifts = {};

  const gifsList = letter
    .split(' ')
    .filter((gift) => gift !== '')
    .filter((gift) => !gift.startsWith('_'));

  gifsList.forEach((gift) => {
    let count = gifts[gift] || 0;
    gifts[gift] = count + 1;
  });

  return gifts;
};

const letter = 'bici coche balón _playstation bici coche peluche';

const gifs = listGifts(letter);

console.log(gifs);
