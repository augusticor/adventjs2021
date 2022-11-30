const sumPairs = (numbers = [], result = 1) => {
  for (let i = 0; i < numbers.length; i++) {
    let differenceIndex = numbers.findIndex((num) => num === result - numbers[i]);

    if (differenceIndex > -1 && differenceIndex !== i) {
      return [numbers[i], numbers[differenceIndex]];
    }
  }
  
  return null;
};

// TESTS
console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
