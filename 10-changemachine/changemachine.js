const getCoins = (change = 0) => {
  const coins = [1, 2, 5, 10, 20, 50];
  const exchange = [0, 0, 0, 0, 0, 0];

  for (let i = coins.length - 1; i >= 0; i--) {
    exchange[i] = Math.floor(change / coins[i]);
    change = change % coins[i];
  }

  return exchange;
};

console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
