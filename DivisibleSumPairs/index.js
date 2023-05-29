function divisibleSumPairs1(n, k, arr) {
  let count = 0;
  const remainderMap = new Map();

  for (const element of arr) {
    const rem = element % k;
    const complementRem = (k - rem) % k;

    if (remainderMap.has(complementRem)) {
      count += remainderMap.get(complementRem);
    }

    if (remainderMap.has(rem)) {
      remainderMap.set(rem, remainderMap.get(rem) + 1);
    } else {
      remainderMap.set(rem, 1);
    }
  }

  return count;
}

function divisibleSumPairs2(n, k, arr) {
  let countResult = 0;

  const sortedArray = arr.sort();
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      const sum = sortedArray[i] + sortedArray[j];
      if (sum % k === 0) {
        countResult += 1;
      }
    }
  }
  return countResult;
}

const input = [1, 3, 2, 6, 1, 2];
const k = 3;
const n = 6;

console.log(divisibleSumPairs1(n, k, input));
