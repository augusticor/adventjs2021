const canCarry = (capacity = 4, trip = []) => {
  const flattedArray = trip.flat();
  const route = new Array(Math.max(...flattedArray) + 1).fill(0);

  for (let i = 0; i < flattedArray.length; i += 3) {
    let giftsToTransport = flattedArray[i];

    let giftCollectionPoint = flattedArray[i + 1];
    route[giftCollectionPoint] += giftsToTransport;

    let giftDeliveryPoint = flattedArray[i + 2];
    route[giftDeliveryPoint] += -giftsToTransport;
  }

  let capacityCount = 0;
  for (const giftn of route) {
    capacityCount += giftn;
    if (capacityCount > capacity) return false;
  }

  return true;
};

// TESTS
console.log(
  canCarry(4, [
    [2, 5, 8],
    [3, 6, 10],
  ])
); // false

console.log(
  canCarry(3, [
    [1, 1, 5],
    [2, 2, 10],
  ])
); // true

console.log(
  canCarry(3, [
    [2, 1, 5],
    [3, 5, 7],
  ])
); // true -> nunca supera el máximo de capacidad

console.log(
  canCarry(4, [
    [2, 3, 8],
    [2, 5, 7],
  ])
); // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

console.log(canCarry(1, [[2, 3, 8]])); // false -> no podría ni con el primer viaje

console.log(
  canCarry(2, [
    [1, 2, 4],
    [2, 3, 8],
  ])
); // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
