/**
 * O(lon n)
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (num) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.info(start, middle, end);

  while (arr[middle] !== num && start <= end) {
    if (num < arr[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === num ? num : -1;
};

console.info(search(6));
console.warn(search(15));
