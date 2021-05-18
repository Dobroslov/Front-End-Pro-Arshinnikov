let validOperator = getOperator('Введи арифметическое действие (Варианты: "+" "-" "*" "/")'); // переменная для вводимого ариф. действия
let numberOfOperands = getNumberOfOperands('Введите необходимое количество операндов (не менее двух)'); // переменная для колличества вводимых чисел
let inputNumber; // переменная для ввода чисел
let resultCalculate; // переменная для калькуляции чисел (конечный результат)
let outputResult; // переменная для alert


for (n = 0; n < numberOfOperands; n++) {
        inputNumber = getOperand('Введите число');
        if (n === 0) {
                resultCalculate = inputNumber; // присваиваем первое введенное число переменной результат
                outputResult = inputNumber; // присваиваем первое введенное число переменной которая будет выводиться в alert
        } else {
                resultCalculate = mathOperation(validOperator, resultCalculate, inputNumber);
                outputResult += ` ${validOperator} ${inputNumber}`; // запись чисел для выведения в alert
        }
        
}

alert(`${outputResult} = ${resultCalculate}`); // выводит результат и все введённые числа и ариф. действия


function getOperator(message) {
        let answer = '';

        do {
                answer = prompt(message);
                 
                if (isOperatorInvalid(answer)) {
                        alert(`Введённое значение ${answer} не является допустимым арифметическим действием!`);
                }
        } while (isOperatorInvalid(answer));
        
                return answer;
}

function isOperatorInvalid(operator) {  

        return (
                operator !== "+" && 
                operator !== "-" && 
                operator !== "*" && 
                operator !== "/"  // функция проверки соответсвия оператора нужным значениям + - * /
        );
}

function isNumber(number) {

        return !isNaN(number); // валидация числа
}

function getNumberOfOperands(message) {
        let result = '';

        do {
                result = prompt(message, 2);

                if (!isNumber(result)) {
                        alert(`Введённое значение ${result} не является числом`);
                } 
                else if (!Number.isInteger(+result)) {
                        alert(`Данное значение ${result} не является целым числом`);
                }
                
                else if (result < 2) {
                        alert(`Данное значение ${result} меньше 2`)
                }    
        } while (!isNumber(result) || (result < 2) || !Number.isInteger(+result)) 

        return +result; // получение количества вводимых чисел для арифм. действий и их валидация
}

function getOperand(message) {
        let number = '';

        do {
                number = prompt(message);
                if (!isNumber(number)) {
                        alert(`Введённое значение ${number} не является ЧИСЛОМ`);
                } 
        } while (!isNumber(number));

        return +number; // получение валидного числа для арифметического действия
}

function mathOperation(operator, a, b) {

        switch (operator) {
                case '+':
                        return a + b;                
                case '-':
                        return a - b;
                case '*':
                        return a * b;
                case '/':
                        return a / b;
        } // совершаем арифметическое действие в зависимости от выбранного пользователем оператора (арифметического знака)
}