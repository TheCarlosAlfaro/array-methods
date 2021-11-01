console.log('reduce');

const coolNumbers = [23, 16, 94, 34, 234, 975];

const result = coolNumbers.reduce((prev, curr) => {
  return prev + curr;
});

console.log(result);
