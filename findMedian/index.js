function findMedian(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const index = Math.floor(arr.length / 2);
  return sortedArray[index];
}
const input = [5, 3, 1, 1, 2, 25, 34, 2, 4];
console.log(findMedian(input));
