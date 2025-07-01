function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

function isFibonacci(num) {
  if (num < 0) return false;

  const n1 = 5 * num * num + 4;
  const n2 = 5 * num * num - 4;

  return isPerfectSquare(n1) || isPerfectSquare(n2);
}
const input = parseInt(prompt("Enter a number"));
alert(isFibonacci(input))
