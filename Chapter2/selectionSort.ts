function findSmallest(arr: Array<number>): number {
  let smallest_index = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element < arr[smallest_index]) {
      smallest_index = i;
    }
  }
  return smallest_index;
}

function selectionSort(arr: Array<number>): Array<number> {
  const sortedArr: Array<number> = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    const smallest_index = findSmallest(arr)
    sortedArr.push(arr[smallest_index]);
    arr.splice(smallest_index, 1);
  }
  return sortedArr;
}

