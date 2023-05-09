const plusMinus = (arr) => {
  const length = arr.length;

  let countPositive = 0;
  let countnegetive = 0;
  let countZero = 0;

  arr.forEach((element) => {
    if (element > 0) {
      countPositive += 1;
    } else if (element < 0) {
      countnegetive += 1;
    } else {
      countZero += 1;
    }
  });

  console.log(countPositive / length);
  console.log(countnegetive / length);
  console.log(countZero / length);
};

const input = [1, 1, 0, -1, -1];

plusMinus(input);
