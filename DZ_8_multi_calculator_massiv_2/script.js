// 1) с помощью промта спрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор пока он введет допустимое значение


// 2) спрашиваем у пользователя операнды, он их вводит в одном промте через запятую. То что введет пользователь не должно быть пустой строкой или null.


// 3) Отфильтровываем все четные и невалидные значение


// 4) С помощью alert или console.log выводим результат действия (+ - / *) с отсавшимися операндами. Если один из операндов не число, то мы его просто пропускаем.

// Н-р "1 + 1 + 3 = 5"

const operator = getOperator('Введите необходимое арифметическое действие (Варианты: "+" "-" "*" "/")'); 
const arrOperands = getOperands('Введи все числа для арифметического действия через запятую'); //массив с валидными значениями
const result = getResult(operator, arrOperands);

function getOperator (message) {
  let answer;

  do {
    answer = prompt(message);
  } while (isOperatorNotValid(answer));

  // console.log(answer);
  return answer;  
}

function isOperatorNotValid(str) {
  return str !== "+" &&
          str !== "-" &&
          str !== "*" &&
          str !== "/"
} // фильтр для математического знака

function getOperands (message) {
  let arrValue = [];
  let answer;

  do {
    answer = prompt(message, '1,3,2,6,5,gdsf,+,77');
    if (answer === '') alert('Вы ничего не ввели'); 
    if (answer === null) alert('Вы нажали "Отмена"');
  } while (answer === '' || answer === null); // фильтрую пустое сообщение или нажатие кнопки "отмена"

  arrValue = answer.split(','); // создаю массив убирая запятые введённые пользователем
   return arrValidValue = arrValue.filter(function (index) { 
    return (!isNaN(index) && index % 2 !== 0 ); //фильтрую на не числа и фильтрую чётные (убираю), остаётся массив с числовыми значениями но записанный в строчном регистре
  }).map(Number); // перебираю массив со строками чисел и перевожу их в цифровой формат, делаю числами.
}

function getResult(operator, operands) {
  let calculation;
    switch(operator) {
    case '+':
        calculation = operands.reduce((acc, current) => acc + current, 0);
        break;
    case '-':
        calculation = operands.reduce((acc, current) => acc - current, 0);
      break;
    case '*':
        calculation = operands.reduce((acc, current) => acc * current, 0);
      break;
    case '/':
        calculation = operands.reduce((acc, current) => acc / current, 0);
      break;
    }    
    return calculation;    
  }

  
  alert(` ${arrOperands.join(operator)} = ${result}`);

