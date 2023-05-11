const miniMaxSum = (arr) => {
  arr.sort();
  const minSum = arr.slice(0, arr.length - 1).reduce((acc, curr) => acc + curr);
  const maxSum = arr.slice(1, arr.length).reduce((acc, curr) => acc + curr);
  console.log(minSum, maxSum);
};

const input = [1, 3, 5, 7, 9];

miniMaxSum(input);
