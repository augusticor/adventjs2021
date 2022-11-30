const wrapGifts = (gifts = []) => {
  if (gifts.length === 0) return gifts;

  const wrapper = ['*'.repeat(gifts[0].length + 2)];

  return wrapper
    .concat(
      gifts.map((present) => {
        return `*${present}*`;
      })
    )
    .concat(wrapper);
};

// TESTS
console.log(wrapGifts([]));
console.log(wrapGifts(['📷']));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

console.log(wrapGifts(['📷', '⚽️']));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(['🏈🎸', '🎮🧸']));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/
