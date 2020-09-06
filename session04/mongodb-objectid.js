// https://www.codewars.com/kata/52fefe6cb0091856db00030e/train/javascript
var Mongo = {
  isValid: function (s) {
    if (typeof s === 'string' && s.length === 24 && s.match(/^[0-9a-f]+$/g))
      return true;
    return false;
  },
  getTimestamp: function (s) {
    if (this.isValid(s)) {
      return new Date(parseInt(s.slice(0, 8), 16) * 1000);
    }
    return false;
  },
};

console.log(Mongo.isValid('507f1f77bcf86cd799439011')); // true
console.log(Mongo.isValid('507f1f77bcf86cz799439011')); // false
console.log(Mongo.isValid('507f1f77bcf86cd79943901')); // false
console.log(Mongo.isValid('111111111111111111111111')); // true
console.log(Mongo.isValid(111111111111111111111111)); // false
console.log(Mongo.isValid('507f1f77bcf86cD799439011')); // falsw

console.log(Mongo.getTimestamp('507f1f77bcf86cd799439011')); // Wed Oct 17 2012 21:13:27 GMT-0700 (Pacific Daylight Time)
console.log(Mongo.getTimestamp('507f1f77bcf86cz799439011')); // false
console.log(Mongo.getTimestamp('507f1f77bcf86cd79943901')); // false
console.log(Mongo.getTimestamp('111111111111111111111111')); // Sun Jan 28 1979 00:25:53 GMT-0800 (Pacific Standard Time)
console.log(Mongo.getTimestamp(111111111111111111111111)); // false
