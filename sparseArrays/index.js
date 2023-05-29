function matchingStrings(strings, queries) {
  const hashMap = new Map(queries.map((query) => [query, 0]));
  strings.forEach((element) => {
    if (hashMap.get(element) !== undefined) {
      hashMap.set(element, hashMap.get(element) + 1);
    }
  });
  const result = queries.map((query) => hashMap.get(query));
  return result;
}

const strings = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];

console.log(matchingStrings(strings, queries));
