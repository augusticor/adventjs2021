const checkSledJump = (heights = []) => {
  const maxHeightIndex = heights.indexOf(Math.max(...heights));
  const heightsCount = heights.length - 1;
  let right = maxHeightIndex + 1;
  let left = maxHeightIndex - 1;

  if (right > heightsCount || left < 0) return false; // Si no existe la posicion en el array (undefined)

  while (right <= heightsCount && left >= 0) {
    if (heights[right] >= heights[right - 1] || heights[left] >= heights[left + 1]) return false;

    if (right + 1 > heightsCount && left - 1 < 0) return true;

    right = right + 1 > heightsCount ? heightsCount : right + 1;
    left = left - 1 < 0 ? 0 : left - 1;
  }
};

// TESTS
console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
