// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript

function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  }
  return false;
}

const isDivideBy = (n, a, b) => n % a === 0 && n % b === 0;

console.log(isDivideBy(-12, 2, -6), true);
console.log(isDivideBy(-12, 2, -5), false);
console.log(isDivideBy(45, 1, 6), false);
console.log(isDivideBy(45, 5, 15), true);
console.log(isDivideBy(4, 1, 4), true);
console.log(isDivideBy(15, -5, 3), true);
