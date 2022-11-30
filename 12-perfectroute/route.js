const getMinJump = (obstacles = []) => {
  const maxObstacle = Math.max(...obstacles);
  let minJump = 0;

  for (let i = 2; i < maxObstacle; i++) {
    if (obstacles.indexOf(i) === -1) {
      for (let num = i; num <= maxObstacle; num += i) {
        if (obstacles.indexOf(num) !== -1) {
          minJump = 0;
          break;
        } else {
          minJump = i;
        }
      }

      if (minJump > 0) return minJump;
    }
  }
};

// TESTS
console.log(getMinJump([5, 3, 6, 7, 9])); // -> 4
console.log(getMinJump([2, 4, 6, 8, 10])); // -> 7
console.log(getMinJump([1, 2, 3, 5])); // -> 4
console.log(getMinJump([3, 7, 5])); // -> 2
console.log(getMinJump([9, 5, 1])); // -> 2
