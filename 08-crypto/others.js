// Para probar si falla el caso tricky en otras soluciones
const pricesTricky = [9, 17, 40, 20, 5, 11, 21]; // 31 (compra a 9, vende a 40)
//
function maxProfit1(prices) {
  let arrCompra = prices.slice(0, 2);
  let valorCompra = Math.min(...arrCompra);
  let arrVenta = prices.slice(2, prices.length);
  let valorVenta = Math.max(...arrVenta);
  if (valorVenta <= valorCompra) return -1;
  return [valorCompra, valorVenta].reduceRight((acc, current) => acc - current);
}
console.log(maxProfit1(pricesTricky)); // ✅ mas o menos, valores fijos, revienta si [9, 17]

// otro
function maxProfit2(prices) {
  let difference = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > difference) {
        difference = prices[j] - prices[i];
      }
    }
  }
  return difference !== 0 ? difference : -1;
}
console.log(maxProfit2(pricesTricky)); // ✅ o(n^2)

// otro
function maxProfit3(prices) {
  const sorted = [...prices].sort();

  for (let i = 0; i < sorted.length; i++) {
    for (let j = sorted.length; j >= 0; j--) {
      if (prices.indexOf(sorted[i]) < prices.indexOf(sorted[j])) {
        if (sorted[i] < sorted[j]) {
          return sorted[j] - sorted[i];
        }
      }
    }
  }

  return -1;
}
console.log(maxProfit3(pricesTricky)); // ❌ o(n^2)

// otro
function maxProfit4(prices) {
  let nextIndex = 0;
  const allProfit = prices.reduce((result, price, index) => {
    if (index < nextIndex) {
      return result;
    }

    const foundLastIndex = prices.slice(index).findIndex((p) => p < price);
    nextIndex = foundLastIndex === -1 ? prices.length : foundLastIndex;

    const rest = prices.slice(index + 1, nextIndex);
    const min = price;
    const max = rest.length > 0 ? Math.max(...rest) : price;
    const profit = max - min;
    return profit > 0 ? [...result, profit] : result;
  }, []);

  return allProfit.length > 0 ? Math.max(...allProfit) : -1;
}
console.log(maxProfit4(pricesTricky)); // ✅
