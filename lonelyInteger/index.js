function lonelyInteger(array) {
  const countMap = new Map(array.map((item) => [item, 0]));
  array.forEach((element) => {
    countMap.set(element, countMap.get(element) + 1);
  });
  for (const [key, value] of countMap) {
    if (value === 1) {
      console.log(key);
    }
  }
}

const input = [1, 2, 3, 4, 3, 2, 1];

lonelyInteger(input);
