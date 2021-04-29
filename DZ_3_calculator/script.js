// Первый вариант:


// const selectArithmeticAction = prompt('Какое арифметическое действие ты хочешь выполнить (Варианты: "+" "-" "*" "/"?)');
// const firstEnteredNumber = prompt('Введи первое число');
// const secondEnteredNumber = prompt('Введи второе число');
// const addition = Number(firstEnteredNumber) + Number(secondEnteredNumber);
// const subtraction = Number(firstEnteredNumber) - Number(secondEnteredNumber);
// const multiplication = Number(firstEnteredNumber) * Number(secondEnteredNumber);
// const division = Number(firstEnteredNumber) / Number(secondEnteredNumber);
// if (selectArithmeticAction === '+') {
//         alert(firstEnteredNumber + selectArithmeticAction + secondEnteredNumber + ' = ' + String(addition));        
// } else if (selectArithmeticAction === '-') {
//         alert(firstEnteredNumber + selectArithmeticAction + secondEnteredNumber + ' = ' + String(subtraction));
// } else if (selectArithmeticAction === '*') {
//         alert(firstEnteredNumber + selectArithmeticAction + secondEnteredNumber + ' = ' + String(multiplication));
// } else if (selectArithmeticAction === '/') {
//         alert(firstEnteredNumber + selectArithmeticAction + secondEnteredNumber + ' = ' + String(division));
// }


// Сокращенный второй вариант:


let firstNumber = +prompt('Введи первое число');
let firstOperation = prompt('Выбери первое арифметическое действие (Варианты:"+" "-" "*" "/")');
let secondNumber = +prompt('Введи второе число');
if (firstOperation === '*') {
        calculationResult =  firstNumber * secondNumber;
} else if (firstOperation === '/') {
        calculationResult =  firstNumber / secondNumber;
} else if (firstOperation === '+') {
        calculationResult =  firstNumber + secondNumber;
} else if (firstOperation === '-') {
        calculationResult =  firstNumber - secondNumber;
}
alert(`${firstNumber}${firstOperation}${secondNumber}=${calculationResult}`);
