function quickSort(arr: Array<number>): Array<number> {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const smallerArr: Array<number> = [];
  const largerArr: Array<number> = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      smallerArr.push(arr[i])
    } else {
      largerArr.push(arr[i])
    }
  }
  return [...quickSort(smallerArr), pivot, ...quickSort(largerArr)]
}

