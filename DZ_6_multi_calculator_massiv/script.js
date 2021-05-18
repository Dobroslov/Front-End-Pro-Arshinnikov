function getOperator () {

    let answer;

    do {
            answer = prompt('Введи необходимое арифметическое действие (Варианты: "+" "-" "*" "/"');
    } while (!isOperatorValid(answer))
    return answer;
}

function isOperatorValid(str) {
  return str === "+" || 
         str === "-" || 
         str === "*" || 
         str === "/"
}

function getArrayOfValidValue() {

  let arrValue = '';

  do {
    answer = prompt('Введи все числа для арифметического действия через запятую'); 
  } while (answer === null || answer === '')
    arrValue = answer.split(',');

    return filterNumbers = arrValue.map(Number).filter(Number)
}

function getResult (operator) {

  let sum = arrayOfValidValue[0];

  for(let i = 1; i < (arrayOfValidValue.length); i++) {

    switch(operator) {
      case '+':
        sum = sum + arrayOfValidValue[i];  
        console.log(sum);    
        break;
      case '-':
        sum = sum - arrayOfValidValue[i];
        break;
      case '*':
        sum = sum * arrayOfValidValue[i];
        break;
      case '/':
        sum = sum / arrayOfValidValue[i];
        break;
    }    
  }
  return sum;
}

let operator = getOperator();
let arrayOfValidValue = getArrayOfValidValue();
let result = getResult(operator);
alert(`Результат: ${arrayOfValidValue.join(operator)} = ${result}`);




