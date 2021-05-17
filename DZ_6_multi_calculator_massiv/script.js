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

    return filterNumbers = arrValue.filter(function(index) {
            return (!isNaN(index));
          }
    )
}


function getArrayNumbers(array) {  
  return array.map(Number);
}

function getResult (operator) {

  sum = arrayNumbers[0];

  for(let i = 1; i < (arrayNumbers.length); i++) {

    switch(operator) {
      case '+':
        sum = sum + arrayNumbers[i];  
        console.log(sum);    
        break;
      case '-':
        sum = sum - arrayNumbers[i];
        break;
      case '*':
        sum = sum * arrayNumbers[i];
        break;
      case '/':
        sum = sum / arrayNumbers[i];
        break;
    }    
  }
  return sum;
}

const operator = getOperator();
let arrayOfValidValue = getArrayOfValidValue();
let arrayNumbers = getArrayNumbers (arrayOfValidValue);
let result = getResult(operator);
alert(`Результат: ${arrayNumbers.join(operator)} = ${result}`);




