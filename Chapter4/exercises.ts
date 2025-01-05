function count(arr: Array<number>): number {
  if (arr.length == 0) {
    return 0;
  }
  return 1 + count(arr.slice(1))
}

function max(arr: Array<number>): number {
  if (arr.length === 1) {
    return arr[0]
  }
  let maximum = max(arr.slice(1))
  return arr[0] > maximum ? arr[0] : maximum
}

