function binarySearch(arr: Array<number>, item: number): (number | null) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    if (guess === item) {
      return mid
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}
