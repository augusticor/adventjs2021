/**
 * Problema # 4 usando recursividad
 * @param {number} height altura deseada para el arbol
 * @returns {string} arbol
 */
const createXmasTree = (height) => {
  const treeWidth = height + (height - 1);

  const tree = (auxHeight = height) => {
    if (auxHeight > 1) {
      return (
        tree(auxHeight - 1) +
        '\n' +
        '_'.repeat((treeWidth - (auxHeight + (auxHeight - 1))) / 2) +
        '*'.repeat(auxHeight + (auxHeight - 1)) +
        '_'.repeat((treeWidth - (auxHeight + (auxHeight - 1))) / 2)
      );
    }

    return '_'.repeat((treeWidth - 1) / 2) + '*' + '_'.repeat((treeWidth - 1) / 2);
  };

  // Añadir raiz
  const trunk = '\n' + '_'.repeat((treeWidth - 1) / 2) + '#' + '_'.repeat((treeWidth - 1) / 2);

  return tree().concat(trunk.repeat(2));
};

// ----- TESTS -----

console.log(createXmasTree(5));

/*
console.log(createXmasTree(2));

_*_
***
_#_
_#_


console.log(createXmasTree(3));

__*__
_***_
*****
__#__
__#__


console.log(createXmasTree(5));

____*____
___***___
__*****__
_*******_
*********
____#____
____#____

*/
