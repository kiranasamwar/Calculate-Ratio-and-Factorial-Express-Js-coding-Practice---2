const ratioNumbers = require("../ratio/index");
const ratioFactorial = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioNumbers(num1, num2);
  const factorial = ratioFactorial(num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
