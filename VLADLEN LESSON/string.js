// const name = 'Владимир';
// console.log(typeof name);
// const age = 23;
// // const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age;

// function getAge() {
//   return age;
// }
// const output = `Привет меня зовут ${name} и мой возраст ${getAge()} или ${
//   age < 20 ? 'A' : 'B'
// }`; // можно вставлять переменные, функции и даже тернанрные выражения
// console.log(output);
// const html = `
// <div>Это див </div>`
// const myName = 'Владимир';
// console.log(myName.length); // длинна строки
// console.log(myName.toLocaleUpperCase()); // верхний регистр ВЛАДИМИР
// console.log(myName.toLocaleLowerCase()); // нижний регистр владимир
// console.log(myName.charAt(2)); // передаём значение второго символа
// console.log(myName.indexOf('мир')); // присутствует ли в строке такой кусок слова и он выдаст 5 - т.е. начиная с 5 символа идёт этот кусок (если нет такого то выдаст -1)
// console.log(myName.startsWith('Вл')); // даст true если строка НАЧИНАЕТСЯ с такого значения
// console.log(myName.endsWith('ир')); // заканчивается ли строка этими символами
// console.log(myName.repeat(3)); // повтор столько раз
// const string = '     fsadfas      ';
// // console.log(string.trim()); // обрезаем пробелы со всех сторон (есть методы для обрезки слева или справа)
// function logPerson(s, name, age) {
//   // console.log(s, name, age);
//   if (age <= 0) {
//     age = 'Ещё не родился';
//   }
//   return `${s[0]}${name}${s[1]}${age}${s[2]}`;
// }

// const personName = 'Владимир';
// const personName2 = 'Максим';
// const personAge = 37;
// const personAge2 = -3;
// const output = logPerson`Имя: ${personName}, Возрост: ${personAge}!`;
// const output2 = logPerson`Имя: ${personName2}, Возрост: ${personAge2}!`;
// console.log(output);
// console.log(output2);
