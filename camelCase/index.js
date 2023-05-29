const camelCase = (input) => {
  for (const inputString in input) {
    const splittedInputString = inputString.split(";");
    const operation = splittedInputString[0];
    const inputType = splittedInputString[1];
    let name = splittedInputString[2];
    if (operation === "S") {
      if (inputType === "M") {
        const result = name.substring(0, name.length - 2);
        for (const c of result) {
          if (c === c.toUpperCase()) {
            name = result.replace(c, ` ${c.toLowerCase()}`);
          }
        }
      } else {
        for (const c of name) {
          if (c === c.toUpperCase()) {
            name = name.replace(c, ` ${c.toLowerCase()}`);
          }
        }
      }
    } else {
      camelize(name);
      if (inputType === "C") {
        name = name[0].toUpperCase().concat(name.substring(1));
      } else if (inputType === "M") {
        name = name.concat("()");
      }
    }
    return name;
  }
};

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

const input1 = "S;M;plasticCup()";
const input2 = "C;V;mobile phone";
const input3 = "C;C;coffee machine";
const input4 = "S;C;LargeSoftwareBook";
const input5 = "C;M;white sheet of paper";
const input6 = "S;V;pictureFrame";

console.log(camelCase([input1, input2]));
