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

function getNumberOfOperands(message) {
        let result = prompt(message, 2);

        while (
                isNaN(result) || 
                (result < 2) || 
                !Number.isInteger(+result)
                ) {
                if (isNaN(result)) {
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
        return +result;
}

function getOperand(message) {
        let number = '';

        do {
                number = prompt(message);
                if (isNaN(number)) {
                        alert(`Введённое значение ${number} не является ЧИСЛОМ`);
                } 
        } while (isNaN(number));
        return +number;
}

let validOperator = getOperator('Введи арифметическое действие (Варианты: "+" "-" "*" "/")');
let numberOfOperands = getNumberOfOperands('Введите необходимое количество операндов (не менее двух)');
let Operand = getOperand('Введите число');
let result =  calculate(inputOperandA, inputOperandB,validOperator)

function isNumber(number) {
        return (isNaN(number));
}

// function calculate(a, b, operator) {
//         switch (operator) {
//                 case '+':
//                         return sum(a, b);
//                 case '-':
//                         return sub(a, b);
//                 case '*':
//                         return divid(a, b);
//                 case '/':
//                         return multiplication(a, b);              
//         } // выбираем действие в зависимости от оператора (арифметического знака)
// }

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



// function showResult(a, b, op, result) {
//         alert(`$a{a} ${op} ${b} = ${result}`) // фунция выводит готовый результат
// }

// showResult(operandA, operandB, operator, result); 




// function isNumberValid(value) {
//         return (!isNaN(value) && value !== '' && value !== null); // Вернётся TRUE проверяет валидность цифр
// }