function getOperator(message) {
        let answer = '';

        do {
                answer = prompt(message);
                 
                if (!isOperatorSuccessfull(answer)) {
                        alert(`Введённое значение ${answer} не является допустимым арифметическим действием!`);
                }
        } while (!isOperatorSuccessfull(answer));
        
                return answer;
}

function isOperatorSuccessfull(operator) {  
        return (
                operator === "+" || 
                operator === "-" || 
                operator === "*" || 
                operator === "/"  // функция проверки соответсвия оператора нужным значениям + - * /
        );
}



function isNumber(number) {
        return (isNaN(number)); // валидация числа
}

function getNumberOfOperands(message) {
        let result = prompt(message, 2);

        while (
                isNumber(result) || 
                (result < 2) || 
                !Number.isInteger(+result)
                ) {
                if (isNumber(result)) {
                        alert(`Введённое значение ${result} не является числом`);
                } 
                else if (!Number.isInteger(+result)) {
                        alert(`Данное значение ${result} не является целым числом`);
                }
                
                else if (result < 2) {
                        alert(`Данное значение ${result} меньше 2`)
                }
                
                result = prompt(message);
        }
        return +result; // получение количества вводимых чисел для арифм. действий и их валидация
}


function getOperand(message) {
        let number = '';

        do {
                number = prompt(message);
                if (isNumber(number)) {
                        alert(`Введённое значение ${number} не является ЧИСЛОМ`);
                } 
        } while (isNumber(number));
        return +number; // получение валидного числа для арифметического действия
}


let validOperator = getOperator('Введи арифметическое действие (Варианты: "+" "-" "*" "/")'); // переменная для вводимого ариф. действия
let numberOfOperands = getNumberOfOperands('Введите необходимое количество операндов (не менее двух)'); // переменная для колличества вводимых чисел

switch (validOperator) {
        case '+':
                mathOperation = function(a, b) {
                return sum(a, b);
                }
                break;
        case '-':
                mathOperation = function(a, b) {
                return sub(a, b);
                }
                break;
        case '*':
                mathOperation = function(a, b) {
                return multiplication(a, b);
                }
                break;
        case '/':
                mathOperation = function(a, b) {
                return divide(a, b);
                }
                break;
} // совершаем арифметическое действие в зависимости от выбранного пользователем оператора (арифметического знака)


function sum(a, b) { // функция считает сложение
        return a+b;
}

function sub(a, b) { // функция считает вычитание
        return a-b;
}

function divide(a, b) { // функция считает деление
        return a/b;
}

function multiplication(a, b) { // функция считает умножение
        return a*b;
}

let inputNumber; // переменная для ввода чисел
let resultCalculate; // переменная для калькуляции чисел (конечный результат)
let outputResult; // переменная для alert

for (n = 0; n < numberOfOperands; n++) {
        inputNumber = getOperand('Введите число');
        if (n === 0) {
                resultCalculate = inputNumber; // присваиваем первое введенное число переменной результат
                outputResult = inputNumber; // присваиваем первое введенное число переменной которая будет выводиться в alert
        } else {
                resultCalculate = mathOperation(resultCalculate, inputNumber);
                outputResult += ` ${validOperator} ${inputNumber}`; // запись чисел для выведения в alert
        }
        
}

alert(`${outputResult} = ${resultCalculate}`); // выводит результат и все введённые числа и ариф. действия

// function showResult(a, b, op, result) {
//         alert(`$a{a} ${op} ${b} = ${result}`) // функция выводит готовый результат
// }

// showResult(operandA, operandB, operator, result); 




