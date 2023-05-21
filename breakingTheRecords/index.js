const breakingRecords = (scores) => {
  let countMin = 0;
  let countMax = 0;
  let min = scores[0];
  let max = scores[0];
  scores.forEach((score) => {
    if (score > max) {
      max = score;
      countMax += 1;
    }
    if (score < min) {
      min = score;
      countMin += 1;
    }
  });
  return [countMax, countMin];
};

const scores = [12, 24, 10, 24];

console.log(breakingRecords(scores));
