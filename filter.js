console.log('Array.prototype.filter()');

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const result = words.filter((word) => word.length > 6);

console.log(result);
console.log('--------------------------------');

const numbers = [23, 21, 12, 67, 31, 94, 205];

const numbersResult = numbers.filter((number) => number > 15 && number < 50);

console.log(numbersResult);
console.log('--------------------------------');

console.log(words, numbers);
