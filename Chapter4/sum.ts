function sum(arr: Array<number>): number {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1))
}
