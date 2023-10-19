/**
 * O(n2)
 */

const arr = [3, 2, 1, 6, 9, 15, 16, 20];

const bubbleSort = (arr) => {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }
};

bubbleSort(arr);
console.info(arr);
