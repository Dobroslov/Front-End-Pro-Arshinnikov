// Что такое рекурсия?
// Факториал - это:
// 5! = 5*4*3*2*1=120

function recursia(num) {
  if (num < 0) return; // условие экстренного прекращения функции

  if (num === 1) return num; // условие окончания функции
  return num * recursia(num - 1); // значение умножаем на функцию результатом которой будет такая же функция но её число аргумент будет уменьшено на 1 и так до порогового значения 1
}

alert(recursia(6));