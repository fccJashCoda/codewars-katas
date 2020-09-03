// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

// function getAverage(marks) {
//   //TODO : calculate the downwar rounded average of the marks array
//   // a place to store the total of the array
//   let total = 0;
//   // a place to store the result of the final averaging equation
//   let average;
//   // iterate over the array
//   for (let i = 0; i < marks.length; i++) {
//     // add every element to the total
//     total += marks[i];
//   }
//   // calculate average
//   average = Math.floor(total / marks.length);
//   // round( total / length of array )
//   // return average
//   return average;
// }

// function getAverage(marks) {
//   let total = 0;
//   for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }
//   return Math.floor(total / marks.length);
// }

// function getAverage(marks) {
//   let total = 0;
//   marks.forEach((mark) => (total += mark));
//   return Math.floor(total / marks.length);
// }

// function getAverage(marks) {
//   return marks.reduce((total, cur, i, arr) => {
//     total += cur;
//     console.log(total);
//     if (i === arr.length - 1) {
//       return Math.floor(total / arr.length);
//     }
//     return total;
//   }, 0);
// }

// function getAverage(marks) {
//   return marks.reduce((total, cur, i, arr) => {
//     total += cur;
//     return i === arr.length - 1 ? Math.floor(total / arr.length) : total;
//   }, 0);
// }

// const getAverage = (marks) =>
//   marks.reduce((total, cur, i, arr) => {
//     total += cur;
//     return i === arr.length - 1 ? Math.floor(total / arr.length) : total;
//   }, 0);

const getAverage = (marks) =>
  Math.floor(marks.reduce((total, cur) => (total += cur)) / marks.length);

console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
