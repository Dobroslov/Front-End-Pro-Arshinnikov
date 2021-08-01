const addition = require('./math_function/addition');
const subtraction = require('./math_function/subtraction.js');
const multiplication = require('./math_function/multiplication.js');
const division = require('./math_function/division.js');

module.exports = {
  addFn: addition,
  subFn: subtraction,
  multFn: multiplication,
  divFn: division,
};
