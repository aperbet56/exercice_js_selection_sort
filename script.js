// Créez un algorithme de tri par sélection (selection sort)

const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    // Trouver l'élément minimum dans la partie non triée
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
        // console.log(array);
      }
    }
    // Échanger l'élément minimum trouvé avec le premier élément non trié
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
};

console.log(selectionSort([451, 2, 65, 4, 7, 98, 2, 3, 1])); // [ 1, 2, 2, 3, 4, 7, 65, 98, 451 ]
console.log(selectionSort([64, 25, 12, 22, 11])); // [ 11, 12, 22, 25, 64 ]
console.log(selectionSort([14, 8, 34, 1, 24, 6, 69, 43, 5, 0])); // [ 0, 1, 5, 6, 8, 14, 24, 34, 43, 69 ]
console.log(selectionSort([-4, -1, 6, 10, -8, 3])); // [ -8, -4, -1, 3, 6, 10 ]

// EXPLICATION DU CODE JAVASCRIPT

/**
 * Etape 1 : Création de la fonction selectionSort qui prend comme paramètre un tableau.
 * Etape 2 : Nous parcourons le tableau avec la boucle externe (i), qui représente la limite entre les parties triées et non triées.
 * Etape 3 : Pour chaque itération, nous supposons que le premier élément non trié est le minimum et stockons son index dans la variable minIndex.
 * Etape 4 : Nous utilisons ensuite une boucle interne (j) pour trouver l’élément minimum dans la partie non triée.
 * Etape 5 : Si nous trouvons un élément plus petit, nous mettons à jour la varaible minIndex.
 * Etape 6 : Après avoir trouvé le minimum, nous l'échangeons avec le premier élément non trié si nécessaire.
 * Etape 7 : Nous répétons ce processus jusqu’à ce que l’ensemble du tableau soit trié.
 */
