const cars = ['Мазда', 'Форд', 'Фиат', 'Запорожец'];
const fib = [1, 2, 3, 5, 8, 13];
// const people = [
//   {
//     name: 'Владимир',
//     age: 30,
//     children: 1,
//     budget: 2000,
//   },
//   {
//     name: 'Елена',
//     age: 25,
//     children: 2,
//     budget: 3000,
//   },
//   {
//     name: 'Радомир',
//     age: 30,
//     children: 7,
//     budget: 3500,
//   },
// ];
// cars.push('Лада'); // Добавляет в конец новый элемент массива
// cars.unshift('Волга'); // добавляем в начало массива
// // let old = cars.shift(); // удаляем первый элемент и возвращает его
// // let lastCare = cars.pop(); // удаляем последний элемент и возвращает его

// console.log(cars.reverse()); // реверсирует массив и возвращает его уже изменённым

// // Задача 1
// const text = 'Привет, мы изучаем JavaScript';
// const reverseText = text.split('').reverse().join(''); // split разбивает строку на элементы и добавляет в массив, reverse() - переворачивает массив и его возвращает, join соединяет строку в массив

// const index = cars.indexOf('Мазда');
// console.log(cars[index]); // возвратит переменную, индекс которой мы добавили в переменную index. IndexOf хорошо работает с простыми данными строки или цифры.
// console.log(cars.indexOf('Мазда')); // возвращает индекс элемента, который мы ищем

// // можно значение заменить через index
// cars[index] = 'Газель';
// console.log(cars); //

// const index = people.findIndex(function (person) {
//   // console.log(person);
//   return person.budget === 3500;
// });
// хорошо работает со сложными данными. Этот метод являеятся циклом, поэтому он итерирует по очереди объекты
// console.log(people[index]);

// for (const person of people) {
//   // console.log(people);
//   if (person.budget === 3500) {
//     findedPerson = person;
//   }
// }
// console.log(findedPerson);

// const person = people.find((person) => {
//   return person.budget === 2000;
// });
// const person = people.find((person) => person.budget === 2000);  короткий вариант

// console.log(person);

// console.log(cars.includes('Форд')); // проверка на наличие нужного элемента в массиве возвращает булиан значение

// const upperCaseCars = cars.map((car) => {
//   return car.toUpperCase();
// }); // преобразует один массив в другой, через перебор всех значений и последующее их изменение в новый массив

// console.log(upperCaseCars);

// const powNumbers = fib.map((num) => num ** 2);
// console.log(powNumbers);

// можнно усовершенствовать эту запись и сделать доп функцию которая будет совершать действие и мы эту функцию присвоим переменной, затем эту переменную поместим в сам метод map
// const pow2 = (num) => num ** 2;
// const powNumbers = fib.map(pow2);
// console.log(powNumbers);

// const pow2 = (num) => num ** 2;
// const powNumbers = fib.map(pow2);
// const filteredNumbers = powNumbers.filter((num) => {   // фильтр возвращает НОВЫЙ МАССИВ используя колбэк функцию с условием фильтрации, где num это каждое число которое мы перебираем циклом
//   return num > 20; // возвращает true или folse
// });
// console.log(filteredNumbers);

const people = [
  {
    name: 'Владимир',
    age: 30,
    children: 1,
    budget: 2000,
  },
  {
    name: 'Елена',
    age: 25,
    children: 2,
    budget: 3000,
  },
  {
    name: 'Радомир',
    age: 30,
    children: 7,
    budget: 3500,
  },
];
// const allBudget = people
//   .filter((person) => person.budget > 2000)
//   .reduce((acc, person) => {  // объединяет все значения массива в одно значение. Первым значением принимает функцию, вторым начальное значение аккумулятора
//     // if (person.budget > 2000) {
//     //   acc += person.budget;
//     // }
//     acc += person.budget;
//     return acc;
//   }, 0);

// console.log(allBudget);

// const allAge = people.reduce(function (accum, person) {
//   return (accum += person.age);
// }, 0);

const allChildren = people
  .filter((child) => child.children > 0)
  .reduce((acc, child) => {
    acc += child.children;
    return acc;
  }, 0);

console.log(allChildren);

array.forEach((element) => {}); // делает итерацию по массиву, где пермым параметром принимает колбэк функцию и сам параметр функции принимает каждый элемент массива
