// https://www.codewars.com/kata/5877e7d568909e5ff90017e6/javascript

function findAll(n, k) {
  // an array of k length filled with 1s
  const digits = Array.from({ length: k }, () => 1);
  // a place to store the count of every matches
  let counter = 0;
  // a place to store the lowest matching value
  let min;
  // a place to store the highest matching value
  let max;
  while (k * digits[0] < n + 1) {
    // check if the current sum of our array matches
    let sum = digits.reduce((t, c) => (t += +c), 0);
    if (+sum === n) {
      // if it does store our value in the appropriate variable
      if (!min) {
        min = digits.join('');
      }
      max = digits.join('');
      // and increment the match count
      counter++;
    }

    // carry the one
    let newbase;
    if (digits[digits.length - 1] === 9) {
      // if increment place is 9 find the next digit that is < 9
      for (let i = digits.length - 2; i >= 0; i--) {
        if (i === 0 && digits[i] === 9) {
          return min ? [counter, min, max] : [];
        }
        if (digits[i] < 9) {
          // and increment it instead
          digits[i]++;
          // then reinitialize any previous number to this base
          newbase = digits[i];
          for (let j = i; j < digits.length; j++) {
            digits[j] = newbase;
          }
          break;
        }
      }
      // else increment the last number
    } else {
      digits[digits.length - 1]++;
    }
  }
  return min ? [counter, min, max] : [];
}

function findAll(n, k) {
  const digits = Array.from({ length: k }, () => 1);
  let counter = 0;
  let min;
  let max;
  while (k * digits[0] < n + 1) {
    let sum = digits.reduce((t, c) => (t += +c), 0);
    if (+sum === n) {
      if (!min) {
        min = digits.join('');
      }
      max = digits.join('');
      counter++;
    }
    let newbase;
    if (digits[digits.length - 1] === 9) {
      for (let i = digits.length - 2; i >= 0; i--) {
        if (i === 0 && digits[i] === 9) {
          return min ? [counter, min, max] : [];
        }
        if (digits[i] < 9) {
          digits[i]++;
          newbase = digits[i];
          for (let j = i; j < digits.length; j++) {
            digits[j] = newbase;
          }
          break;
        }
      }
    } else {
      digits[digits.length - 1]++;
    }
  }
  return min ? [counter, min, max] : [];
}

console.log(findAll(10, 3), [8, '118', '334']);
console.log(findAll(27, 3), [1, '999', '999']);
console.log(findAll(84, 4), []);
console.log(findAll(35, 6), [123, '116999', '566666']);
