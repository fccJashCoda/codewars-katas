// https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript

// function wordValue(a) {
//   // a place to store our final values
//   const wordValues = [];
//   // a loop to iterate over every input
//   for (let i = 0; i < a.length; i++) {
//     // a place to store our current string
//     let str = a[i];
//     // a place to store the result of the current string
//     let result = 0;
//     // a place to store our operand
//     let operand = 'a'.charCodeAt(0) - 1;
//     // a loop to iterate over every char in the string
//     for (let j = 0; j < str.length; j++) {
//       const char = str[j];
//       // if the char is  a letter
//       if (/[a-zA-z]/.test(char)) {
//         // find its charcode and use the modulo operator % with
//         // the lowest charcode -1 to get the letter's desired value
//         // add the value to the result
//         result += char.charCodeAt(0) % operand;
//       }
//     }
//     // multiply the result and append it to our array
//     wordValues.push(result * (i + 1));
//   }
//   return wordValues;
// }

// function wordValue(a) {
//   const wordValues = [];
//   for (let i = 0; i < a.length; i++) {
//     let str = a[i];
//     let result = 0;
//     let operand = 'a'.charCodeAt(0) - 1;
//     for (let j = 0; j < str.length; j++) {
//       const char = str[j];
//       if (/[a-zA-z]/.test(char)) {
//         result += char.charCodeAt(0) % operand;
//       }
//     }
//     wordValues.push(result * (i + 1));
//   }
//   return wordValues;
// }

// function wordValue(a) {
//   return a.map(
//     (val, i) =>
//       [...val].reduce(
//         (total, cur) =>
//           (total += /[a-zA-z]/.test(cur) ? cur.charCodeAt(0) % 96 : 0),
//         0
//       ) *
//       (i + 1)
//   );
// }

const wordValue = (a) =>
  a.map(
    (val, i) =>
      [...val].reduce(
        (sum, cur) => (sum += /[a-z]/.test(cur) ? cur.charCodeAt(0) % 96 : 0),
        0
      ) *
      (i + 1)
  );

console.log(wordValue(['codewars', 'abc', 'xyz']), [88, 12, 225]);
// console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc']), [12, 24, 18, 24]);
console.log(wordValue(['abc', 'abc abc']), [6, 24]);
// console.log(wordValue(['abc']), [6, 24]);
