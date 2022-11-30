const shouldBuyFidelity = (times) => {
  const price = 12;
  const loyaltyCard = 250;
  const discount = 0.75;

  const calculatePriceWithCard = (tim) => {
    if (tim > 1) {
      return price * Math.pow(discount, tim) + calculatePriceWithCard(tim - 1);
    }
    return price * discount;
  };

  const normalPrice = price * times;
  const cardPrice = loyaltyCard + calculatePriceWithCard(times);

  return normalPrice > cardPrice;
};

console.log(shouldBuyFidelity(1)); // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)); // true -> Mejor comprar tarjeta fidelidad
