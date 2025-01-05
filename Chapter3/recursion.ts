function countdown(till: number): void {
  if (till < 0) {
    return;
  }
  console.log(till);
  countdown(till - 1);
}

function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

