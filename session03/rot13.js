// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

// function rot13(message) {
//   // a place to store the cipher
//   let cipher = '';
//   // iterate over the string
//   for (let i = 0; i < message.length; i++) {
//     let char = message[i];
//     let lower = false;
//     // if char is letter
//     if (/[a-zA-Z]/.test(char)) {
//       // if char is lowercase
//       if (/[a-z]/.test(char)) {
//         // set bool to true
//         lower = true;
//       }
//       // set char to uppercase
//       // get the char code
//       let charcode = char.toUpperCase().charCodeAt() + 13;
//       // if charcode + 13 <= z
//       if (charcode <= 90) {
//         // validate
//         cipher += lower
//           ? String.fromCharCode(charcode).toLowerCase()
//           : String.fromCharCode(charcode);
//         continue;
//       }
//       // else get charcode of a + (charcode % charcode of z)
//       charcode = 64 + (charcode % 90);
//       cipher += lower
//         ? String.fromCharCode(charcode).toLowerCase()
//         : String.fromCharCode(charcode);
//     }
//   }
// }

// function rot13(message) {
//   let cipher = '';
//   for (let i = 0; i < message.length; i++) {
//     let char = message[i];
//     let lower = false;
//     if (/[a-zA-Z]/.test(char)) {
//       if (/[a-z]/.test(char)) {
//         lower = true;
//       }
//       let charcode = char.toUpperCase().charCodeAt() + 13;
//       if (charcode <= 90) {
//         cipher += lower
//           ? String.fromCharCode(charcode).toLowerCase()
//           : String.fromCharCode(charcode);
//         continue;
//       }
//       charcode = 64 + (charcode % 90);
//       cipher += lower
//         ? String.fromCharCode(charcode).toLowerCase()
//         : String.fromCharCode(charcode);
//     }
//   }
// }

// function rot13(message) {
//   return [...message].reduce((cipher, char) => {
//     let lower = false;
//     if (/[a-zA-Z]/.test(char)) {
//       if (/[a-z]/.test(char)) {
//         lower = true;
//       }
//       let charcode = char.toUpperCase().charCodeAt() + 13;
//       if (charcode <= 90) {
//         return (cipher += lower
//           ? String.fromCharCode(charcode).toLowerCase()
//           : String.fromCharCode(charcode));
//       }
//       charcode = 64 + (charcode % 90);
//       return (cipher += lower
//         ? String.fromCharCode(charcode).toLowerCase()
//         : String.fromCharCode(charcode));
//     }
//     return (cipher += char);
//   }, '');
// }

// function rot13(message) {
//   return [...message].reduce((cipher, char) => {
//     if (/[a-zA-Z]/.test(char)) {
//       const limit = char > 'Z' ? { min: 97, max: 122 } : { min: 65, max: 90 };
//       let charcode = char.charCodeAt() + 13;
//       if (charcode <= limit.max) {
//         return (cipher += String.fromCharCode(charcode));
//       }
//       charcode = limit.min - 1 + (charcode % limit.max);
//       return (cipher += String.fromCharCode(charcode));
//     }
//     return (cipher += char);
//   }, '');
// }

// function rot13(message) {
//   return [...message].reduce((cipher, char) => {
//     if (/[a-z]/gi.test(char)) {
//       let charcode = char.charCodeAt(0);
//       return (cipher +=
//         char.toLowerCase() < 'n'
//           ? String.fromCharCode(charcode + 13)
//           : String.fromCharCode(charcode - 13));
//     }
//     return (cipher += char);
//   }, '');
// }

// function rot13(message) {
//   return [...message].reduce(
//     (cipher, char) =>
//       (cipher += char.match(/[a-z]/gi)
//         ? char.toLowerCase() < 'n'
//           ? String.fromCharCode(char.charCodeAt() + 13)
//           : String.fromCharCode(char.charCodeAt() - 13)
//         : char),
//     ''
//   );
// }

// function rot13(message) {
//   return [...message].reduce(
//     (cipher, char) =>
//       (cipher += char.match(/[a-z]/gi)
//         ? String.fromCharCode(
//             char.charCodeAt() + (char.toLowerCase() < 'n' ? 13 : -13)
//           )
//         : char),
//     ''
//   );
// }

// function rot13(message) {
//   return message.replace(/[a-z]/gi, (c) =>
//     String.fromCharCode(c.charCodeAt() + (c.toLowerCase() < 'n' ? 13 : -13))
//   );
// }

const rot13 = (message) =>
  message.replace(/[a-z]/gi, (c) =>
    String.fromCharCode(c.charCodeAt() + (c.toLowerCase() < 'n' ? 13 : -13))
  );

console.log(
  'Input: test , Expected Output: grfg , Actual Output: ' + rot13('test')
);
console.log(
  'Input: Test , Expected Output: Grfg , Actual Output: ' + rot13('Test')
);
