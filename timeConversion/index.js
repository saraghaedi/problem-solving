const timeConversion = (s) => {
  const isAM = s.includes("AM");
  const res = s.split(":");

  const newTime = `${res[1]}:${res[2].slice(0, 2)}`;
  if (res[0] !== "12") {
    if (isAM) {
      return `${res[0]}:${newTime}`;
    }
    return `${Number(res[0]) + 12}:${newTime}`;
  }

  if (isAM) {
    return `00:${newTime}`;
  }
  return `12:${newTime}`;
};

const input = "07:05:45AM";
console.log(timeConversion(input));
