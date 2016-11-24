'use strict';

// Recursive solution--not ideal. Runtime of O(logn)

let array = [1, 5, 8, 20, 29, 100, 101, 106, 108];

let key = process.argv[2];

let binary_search_recursive = function(array, key, low, high) {

  if (low > high) {
    return -1;
  }

  let mid = low + Math.floor((high - low) / 2);

  if (array[mid] === key) {
    return mid;
  }

  if (key < array[mid]) {
    return binary_search_recursive(array, key, low, (mid - 1));
  }

  if (key > array[mid]) {
    return binary_search_recursive(array, key, (mid + 1), high);
  }
};

let binary_search = function(array, key) {
  return binary_search_recursive(array, key, 0, (array.length - 1));
};

binary_search(array, key);
