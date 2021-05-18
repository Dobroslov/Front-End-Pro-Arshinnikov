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
     return filterNumbers = arrValue.map(Number).filter(function(index) {
            return (!isNaN(index));
          }
    )    
}

function getResult (operator) {

  let mathResult = arrayOfValidValue[0];

  for(let i = 1; i < (arrayOfValidValue.length); i++) {

    switch(operator) {
      case '+':
        mathResult = mathResult + arrayOfValidValue[i];  
        break;
      case '-':
        mathResult = mathResult - arrayOfValidValue[i];
        break;
      case '*':
        mathResult = mathResult * arrayOfValidValue[i];
        break;
      case '/':
        mathResult = mathResult / arrayOfValidValue[i];
        break;
    }    
  }
  return mathResult;
}

const operator = getOperator();
const arrayOfValidValue = getArrayOfValidValue();
const result = getResult(operator);
alert(`Результат: ${arrayOfValidValue.join(operator)} = ${result}`);




