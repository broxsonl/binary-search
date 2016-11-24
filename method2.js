'use strict';

// Iterative solution. Preferable to recursive, but still O(logn)

let array = [1, 5, 8, 20, 29, 100, 101, 106, 108];

let key = process.argv[2];

let binary_search_iterative = function(array, key) {

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {

    let mid = low + Math.floor((high - low) / 2);

    if (array[mid] === key) return mid;

    if (key < array[mid]) {
      high = mid - 1;
    }
    if (key > array[mid]) {
      low = mid + 1;
    }
  }

  return -1;
};

binary_search_iterative(array, key);
