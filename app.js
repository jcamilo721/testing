function sum(a, b) {
  return parseFloat(a) + parseFloat(b);
}
//sum("0", "1") 3
function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result = a + result;
  }

  return result;
}

// function concatenate(first, second) {
//   return `${first} ${second}`;
// }

module.exports = { sum, multiply };
