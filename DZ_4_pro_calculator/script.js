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
        let isNotSuccessfull;
        do {
                operator = prompt(message);
                isNotSuccessfull = (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/");
                if (isNotSuccessfull) {
                        alert(`Введённое значение ${operator} не является допустимым арифметическим действием!`);
                }
        } while (isNotSuccessfull);
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

