// https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e

function encode(text) {
  // a place to store our final bits string
  let bits = '';
  // loop over the input
  for (let i = 0; i < text.length; i++) {
    // a place to store the ASCII value
    const ASCII = text[i].charCodeAt();
    // a place to store the ASCII byte value
    // make sure its length is 8
    const byte = ASCII.toString(2).padStart(8, '0');
    console.log(byte);
    // another loop to map our new bit values
    for (let j = 0; j < byte.length; j++) {
      // add the current bit three times consecutively to the final result
      const bit = byte[j];
      bits += bit.padEnd(3, bit);
    }
  }
  return bits;
}

function decode(bits) {
  // a place to store our chunks
  let chunks = [];
  // a place to store our decoded string
  let text = '';
  // a loop to iterate over the input
  for (let i = 0; i < bits.length; i += 3) {
    // split the input into an array of 3 letter chunks
    // append the chunk to the chunks array
    chunks.push(bits.slice(i, i + 3));
  }

  // a place to store a byte
  let newByte = '';

  // another loop to verifty the content of our chunk
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];
    // a loop to check each char in the chunk
    // make sure every characters are identical e.g 000 or 111
    let count = 0;
    for (let j = 0; j < chunk.length; j++) {
      if (chunk[j] === '0') count++;
    }
    // if not replace the character that doesn't match e.g 101 => 111
    // if count of 0 = 2 replace 1
    if (count === 2) {
      chunk = chunk.replace('1', '0');
      count = 0;
    }
    // if count of 0 = 1 replace 0
    if (count === 1) {
      chunk = chunk.replace('0', '1');
      count = 0;
    }
    // shorten the chunk to a single character either 1 or 0
    chunk = chunk[0];
    // add the new character to a byte
    newByte += chunk;
    // once the byte is 8 characters long convert it to an ASCII value
    if (newByte.length === 8) {
      // a place to store the ascii char
      const ASCII = parseInt(newByte, 2);
      // convert the ascii value to a character
      const char = String.fromCharCode(ASCII);
      console.log(char);
      // add the character to the decoded string
      text += char;
      newByte = '';
    }
  }
  return text;
}

function encode(text) {
  let bits = '';
  for (let i = 0; i < text.length; i++) {
    const ASCII = text[i].charCodeAt();
    const byte = ASCII.toString(2).padStart(8, '0');
    for (let j = 0; j < byte.length; j++) {
      const bit = byte[j];
      bits += bit.padEnd(3, bit);
    }
  }
  return bits;
}

function decode(bits) {
  let chunks = [];
  let text = '';
  for (let i = 0; i < bits.length; i += 3) {
    chunks.push(bits.slice(i, i + 3));
  }

  let newByte = '';

  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];
    let count = 0;
    for (let j = 0; j < chunk.length; j++) {
      if (chunk[j] === '0') count++;
    }
    if (count === 2) {
      chunk = chunk.replace('1', '0');
      count = 0;
    }
    if (count === 1) {
      chunk = chunk.replace('0', '1');
      count = 0;
    }
    chunk = chunk[0];
    newByte += chunk;
    if (newByte.length === 8) {
      const ASCII = parseInt(newByte, 2);
      const char = String.fromCharCode(ASCII);
      text += char;
      newByte = '';
    }
  }
  return text;
}

function encode(text) {
  let bits = '';
  for (let i = 0; i < text.length; i++) {
    const byte = text[i].charCodeAt().toString(2).padStart(8, '0');
    for (let j = 0; j < byte.length; j++) {
      const bit = byte[j];
      bits += bit.padEnd(3, bit);
    }
  }
  return bits;
}

function decode(bits) {
  let text = '';
  let newByte = '';
  for (let i = 0; i < bits.length; i += 3) {
    let chunk = bits.slice(i, i + 3);
    let count = 0;
    for (let j = 0; j < chunk.length; j++) {
      if (chunk[j] === '0') count++;
    }

    chunk =
      count === 2
        ? chunk.replace('1', '0')
        : count === 1
        ? chunk.replace('0', '1')
        : chunk;
    newByte += chunk[0];
    if (newByte.length === 8) {
      text += String.fromCharCode(parseInt(newByte, 2));
      newByte = '';
    }
  }

  return text;
}

function encode(text) {
  let bits = '';
  for (let i = 0; i < text.length; i++) {
    const byte = text[i].charCodeAt().toString(2).padStart(8, '0');
    for (let j = 0; j < byte.length; j++) {
      const bit = byte[j];
      bits += bit.padEnd(3, bit);
    }
  }
  return bits;
}

function decode(bits) {
  let text = '';
  let newByte = '';
  for (let i = 0; i < bits.length; i += 3) {
    let chunk = bits.slice(i, i + 3);
    switch (chunk) {
      case '100':
      case '010':
      case '001':
        chunk = '000';
        break;
      case '011':
      case '101':
      case '110':
        chunk = '111';
        break;
    }
    newByte += chunk[0];
    if (newByte.length === 8) {
      text += String.fromCharCode(parseInt(newByte, 2));
      newByte = '';
    }
  }

  return text;
}

function encode(text) {
  return [...text]
    .map((l) =>
      [...l.charCodeAt().toString(2).padStart(8, '0')]
        .map((b) => b.padEnd(3, b))
        .join('')
    )
    .join('');
}

function decode(bits) {
  return [...bits.match(/.{1,3}/g)].reduce(
    (obj, chunk) => {
      switch (chunk) {
        case '100':
        case '010':
        case '001':
          chunk = '000';
          break;
        case '011':
        case '101':
        case '110':
          chunk = '111';
          break;
      }
      obj.newByte += chunk[0];
      if (obj.newByte.length === 8) {
        obj.text += String.fromCharCode(parseInt(obj.newByte, 2));
        obj.newByte = '';
      }
      return obj;
    },
    { text: '', newByte: '' }
  ).text;
}

function encode(text) {
  return [...text].reduce(
    (str, l) =>
      (str += [...l.charCodeAt().toString(2).padStart(8, '0')]
        .map((b) => b.padEnd(3, b))
        .join('')),
    ''
  );
}

function decode(bits) {
  return [...bits.match(/.{1,3}/g)].reduce(
    (obj, chunk) => {
      switch (chunk) {
        case '100':
        case '010':
        case '001':
          chunk = '000';
          break;
        case '011':
        case '101':
        case '110':
          chunk = '111';
          break;
      }
      obj.newByte += chunk[0];
      if (obj.newByte.length === 8) {
        obj.text += String.fromCharCode(parseInt(obj.newByte, 2));
        obj.newByte = '';
      }
      return obj;
    },
    { text: '', newByte: '' }
  ).text;
}

// encode tests
console.log(
  encode('hey') ===
    '000111111000111000000000000111111000000111000111000111111111111000000111'
);
// console.log(
//   encode('The Sensei told me that i can do this kata') ===
//     '000111000111000111000000000111111000111000000000000111111000000111000111000000111000000000000000000111000111000000111111000111111000000111000111000111111000111111111000000111111111000000111111000111111000000111000111000111111000111000000111000000111000000000000000000111111111000111000000000111111000111111111111000111111000111111000000000111111000000111000000000000111000000000000000000111111000111111000111000111111000000111000111000000111000000000000000000111111111000111000000000111111000111000000000000111111000000000000111000111111111000111000000000000111000000000000000000111111000111000000111000000111000000000000000000111111000000000111111000111111000000000000111000111111000111111111000000000111000000000000000000111111000000111000000000111111000111111111111000000111000000000000000000111111111000111000000000111111000111000000000000111111000111000000111000111111111000000111111000000111000000000000000000111111000111000111111000111111000000000000111000111111111000111000000000111111000000000000111'
// );

// console.log(
//   encode('T3st') ===
//     '000111000111000111000000000000111111000000111111000111111111000000111111000111111111000111000000'
// );
// decode tests
console.log(
  decode(
    '100111111000111001000010000111111000000111001111000111110110111000010111'
  )
);
console.log(
  decode(
    '100111111000111001000010000111111000000111001111000111110110111000010111'
  ) === 'hey'
);
// console.log(
//   decode(
//     '000111000111000111000100000111111000111000001000000111111000000111000111000100111000000000000000000111000111000000111111000111111000000111000111000111111000111111111000000111111111000000111111000110111000010111000111000111111000111001000111000000111000000000000000000111111111000111000000000111111000111111111111000111111000111111000000000111111000000111000001000000111000000000001000000111111000111111000111000111111000000111000111000000111000000000000000000111111111000111000000000111111000111000000000000111111000000010000111000111111111000111000000000100111000000000000000000111111000111000000111000000111000000000000000000111111000000000111111000111111000000000000111000111111000111111111000000000111000000000000010000111111000000111000000000111111000111111110111000000111000000000000000000111111111000111000000000111111000111000000000000111111000111000000111000111111111000000111111000000111000000000000000000111111000111000111111000111111000000000000111000111111111000111000000000111111000000000000111'
//   ) === 'The Sensei told me that i can do this kata'
// );
// console.log(
//   decode(
//     '000111000111000111000001000000111111000000111111000111111111000000111011000111111111000111000000'
//   ) === 'T3st'
// );
// console.log(
//   decode(
//     '000111000111000111000010000000111111111111011111000111111111000000111111000111101111000111000000000000111000000000000111000000111000000111000111'
//   ) === 'T?st!%'
// );
