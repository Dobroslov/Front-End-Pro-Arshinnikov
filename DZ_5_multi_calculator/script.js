

// let firstOperand = +getNumber('Введите первое число');
// let validOperator = getOperator('Введи арифметическое действие (Варианты: "+" "-" "*" "/")');
// let secondOperand = +getNumber('Введите второе число');
// let calculationResult;

//         switch (validOperator) {
//                 case '+':
//                         calculationResult = firstOperand + secondOperand;
//                         break;
//                 case '-':
//                         calculationResult = firstOperand - secondOperand;
//                         break;
//                 case '*':
//                         calculationResult = firstOperand * secondOperand;
//                         break;
//                 case '/':
//                         calculationResult = firstOperand / secondOperand;
//                         break;              
//         }

// alert(`${firstOperand} ${validOperator} ${secondOperand} = ${calculationResult}`);




function getOperator(message) {
        let operator = '';
        let isNotSuccessfull;

        do {
                operator = prompt(`${message}`);
                isNotSuccessfull = (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/");
                if (isNotSuccessfull) {
                        alert(`Введённое значение ${operator} не является допустимым арифметическим действием!`);
                }
        } while (isNotSuccessfull);
        
        return operator;
}

// function isOperatorSuccessfull(operator) {  
//         return (
//                 operator === "+" || 
//                 operator === "-" || 
//                 operator === "*" || 
//                 operator !== "/"
//         );  // функция проверки соответсвия оператора нужным значениям + - * /
        
// }

function getNumberOperands(message) {
        let result = +prompt(message, 2);

        while (isNaN(result) || (result < 2) || !Number.isInteger(result)) {
                if (isNaN(result)) {
                        alert(`Введённое значение ${result} не является ЧИСЛОМ`);
                } 
                if (!Number.isInteger(+result)) {
                        alert(`Данное значение ${result} не является ЦЕЛЫМ ЧИСЛОМ`);
                }
                if (result < 2) {
                        alert(`Введенное значение ${result} - МЕНЬШЕ 2`);
                }
                result = prompt(message);
        }
        return result;
}


// function getOperand(message) {
//         let operand = '';
//         while
// }
// function isInteger() {
//         let value = +prompt('Введи целое число');
//         while (!Number.isInteger(value)) {
//                 alert(`Данное значение ${value} не является целым числом`)
//                 value = +prompt('Введи целое число');
//         }
//         alert(`Число "${value}" является целым`);
//         return true;
// }

let validOperator = getOperator('Введи арифметическое действие (Варианты: "+" "-" "*" "/")');
let numberOperands = getNumberOperands('Введите необходимое количество операндов (не менее двух)');
let inputOperand = getOperand('Введите число');


// function sum(a, b) { // функция считает сумму сложения
//         return a+b;
// }

// function sub(a, b) { // функция считает вычитание
//         return a-b;
// }

// function divid(a, b) { // функция считает деление
//         return a/b;
// }

// function multiplication(a, b) { // функция считает деление
//         return a*b;
// }


// function showResult(a, b, op, result) {
//         alert(`$a{a} ${op} ${b} = ${result}`) // фунция выводит готовый результат
// }

// showResult(operandA, operandB, operator, result); 




// function isNumberValid(value) {
//         return (!isNaN(value) && value !== '' && value !== null); // Вернётся TRUE проверяет валидность цифр
// }