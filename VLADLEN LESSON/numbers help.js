// const num = 42; // integer
// const float = 43.43; //float
// const pow = 10e3; // степень 10 в 3 степени
// console.log(pow);
// // Number.MAX_SAFE_INTEGER;
// console.log('Math.pow', Math.pow(2, 53) - 1);
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
// console.log('MAX_VALUE', Number.MAX_VALUE);
// console.log('MIN_VALUE', Number.MIN_VALUE);
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY); // положительная безконечность
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY); // отрицательная безконечность
// console.log(1 / 0); // положительная безконечность
// console.log(NaN); // Not a number
// console.log(typeof NaN);
// const weird = 2 / undefined;
// console.log(isNaN(weird)); // функция isNan провереят не число ли это weird=NaN - true
// console.log(Number.isNaN(42)); // будет false, так как функция для Number  проверила на NaN
// console.log(Number.isFinite(42));
// const stringInt = '43';
// const stringFloat = '37.37';
// console.log(Number.parseInt(stringInt) + 2); // ПРИВЕдение строки к  ЦЕЛОМУ числу, можно без Number использовать

// console.log(Number.parseFloat(stringFloat) + 2); // ПРИВЕдение строки к   ДРОБНОМУ числу, можно без Number использовать
// console.log(0.4 + 0.2); // 0.6000000000000001
// console.log(+(0.4 + 0.2).toFixed(4)); // toFixed(4) делает строку и сохраняет 4 знака после запятой, * впереди для приведения обратно к числу

// BIGINT

// console.log(-2990071992547409919999963546n - 29900719925474099199999n); // бигинт работает только с такими же значениями и не может работать с десятичными (дробными числами) и целыми
// console.log(2990071992547409919999963546.4654654n); // error

// MATH

console.log(Math.E); // ехпонента
console.log(Math.PI); // число Пи
console.log(Math.sqrt(25)); // квадратный корень
console.log(Math.pow(5, 3)); // степень
console.log(Math.abs(-42)); // модуль равень 42
console.log(Math.max(32, 12, 42, 5, 11)); // определяет самое большое число
console.log(Math.min(32, 12, 42, 5, 11)); // определяет минимальное число
console.log('Math.floor', Math.floor(4.9, 5.3, 5.5)); // округляет в меньшую сторону
console.log(Math.ceil(4.9)); // округляет в большу сторону
console.log(Math.round(5.5)); // округляет к ближайшему целому
console.log(Math.trunc(5.5)); // округляет
console.log(Math.random()); // даёт рандомное значение числа от 0 до 1
console.log(Math.sin()); // синус

// 4 Exempl

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomBetween(10, 42)); // Алгоритм для получения случайного числа
