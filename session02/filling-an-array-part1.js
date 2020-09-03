// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

let arr = (N) => {
  // initiate an empty array
  const list = [];
  // iterate over every number before N
  for (let i = 0; i < N; i++) {
    // append number to an array
    list.push(i);
  }
  // return the array
  return list;
};

arr = (N) => Array.from({ length: N }, (_, i) => i);

let test = arr();
// describe('#arr creates a new array with the numbers 0 to N-1',_=>{
//   it('should return an array',_=>Test.expect(arr() instanceof Array));
console.log(Array.isArray(test));
//   it('should return a blank array when called with no argument',_=>Test.assertSimilar(arr(), []));
console.log(test.length);
//   it('should return 0 to 3 when called with 4',_=>Test.assertSimilar(arr(4), [0,1,2,3]));
test = arr(4);
console.log(test);
// });
