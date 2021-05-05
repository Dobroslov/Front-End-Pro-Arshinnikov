function getNumber(message) {
        let result = prompt(message);
        while (isNaN(result)) {
        alert(`Введённое значение ${result} не является числом!`);
        result = prompt(message);
        }
        return result;
}

function getOperator(message) {
        let operator;
        do {
                operator = prompt(message);
                if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
                        alert(`Введённое значение ${operator} не является допустимым арифметическим действием!`);
                }
        } while (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") 
        return operator;
}

let firstOperand = +getNumber('Введите первое число');
let validOperator = getOperator('Введи арифметическое действие (Варианты: "+" "-" "*" "/")');
let secondOperand = +getNumber('Введите второе число');
let calculationResult;

        switch (validOperator) {
                case '+':
                        calculationResult = firstOperand + secondOperand;
                        break;
                case '-':
                        calculationResult = firstOperand - secondOperand;
                        break;
                case '*':
                        calculationResult = firstOperand * secondOperand;
                        break;
                case '/':
                        calculationResult = firstOperand / secondOperand;
                        break;              
        }

alert(`${firstOperand} ${validOperator} ${secondOperand} = ${calculationResult}`);

