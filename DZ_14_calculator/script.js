let calc = new Calculator(10);

function Calculator(number) {
  this.result = number;
  console.log(this.result);
  this.sum = (value) => (this.result += value);
  this.subtraction = (value) => (this.result += value);
  this.multiplication = (value) => (this.result *= value);
  this.division = (value) => (this.result /= value);
}

console.log(calc.sum(15));
console.log(calc.subtraction(10));
console.log(calc.multiplication(9));
console.log(calc.division(3));
console.log(calc.subtraction(80));
