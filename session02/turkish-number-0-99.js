const translations = {
  0: 'sıfır',
  1: 'bir',
  2: 'iki',
  3: 'üç',
  4: 'dört',
  5: 'beş',
  6: 'altı',
  7: 'yedi',
  8: 'sekiz',
  9: 'dokuz',
  10: 'on',
  20: 'yirmi',
  30: 'otuz',
  40: 'kırk',
  50: 'elli',
  60: 'altmış',
  70: 'yetmiş',
  80: 'seksen',
  90: 'doksan',
};

const getTurkishNumber = (num) => {
  // check if num is part of our translations
  if (translations[num]) {
    // if so return immediately
    return translations[num];
  }
  // a place to store the turkish translation
  let turkishNumber = '';
  // split num in two parts, tens and ones
  const ones = num % 10;
  const tens = num - ones;
  // append each name to the string
  turkishNumber = translations[tens] + ' ' + translations[ones];
  // return string
  return turkishNumber;
};

const getTurkishNumber = (num) => {
  if (translations[num]) {
    return translations[num];
  }
  return `${translations[num - (num % 10)]} ${translations[num % 10]}`;
};

const getTurkishNumber = (num) => {
  if (translations[num]) {
    return translations[num];
  }
  const ones = num % 10;
  const tens = num - ones;
  return `${translations[tens]} ${translations[ones]}`;
};

const getTurkishNumber = (num) => {
  const ones = num % 10;
  const tens = num - ones;
  return translations[num] || `${translations[tens]} ${translations[ones]}`;
};

const getTurkishNumber = (num) =>
  translations[num] ||
  `${translations[num - (num % 10)]} ${translations[num % 10]}`;

const getTurkishNumber = (num) =>
  ((obj) => obj[num] || `${obj[num - (num % 10)]} ${obj[num % 10]}`)(
    translations
  );

console.log(getTurkishNumber(0), 'sıfır');
console.log(getTurkishNumber(16), 'on altı');
console.log(getTurkishNumber(70), 'yetmiş');
console.log(getTurkishNumber(26), 'yirmi altı');
