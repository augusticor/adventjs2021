const maxProfit = (prices = []) => {
  let maxPriceIndex = -1;
  let minPriceIndex = -1;

  while (prices.length > 0) {
    maxPriceIndex = prices.indexOf(Math.max(...prices));
    minPriceIndex = prices.indexOf(Math.min(...prices));

    if (maxPriceIndex === minPriceIndex) return -1;

    if (maxPriceIndex < minPriceIndex) {
      prices.splice(maxPriceIndex, 1);
      prices.splice(minPriceIndex - 1, 1);
    } else {
      return prices[maxPriceIndex] - prices[minPriceIndex];
    }
  }

  return -1;
};

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)

// Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:
const pricesDoge = [18, 15, 12, 11, 9, 7];
console.log(maxProfit(pricesDoge)); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)

const pricesTricky = [9, 17, 40, 20, 5, 11, 21]; // 31 (compra a 9, vende a 40)
console.log(maxProfit(pricesTricky));
