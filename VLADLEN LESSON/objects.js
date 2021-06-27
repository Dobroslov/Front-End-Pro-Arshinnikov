// const person = {
//   name: 'Владимир',
//   age: 30,
//   isProgrammer: true,
//   languages: ['ru', 'en', 'de'],
//   greet() {
//     console.log('greet from person');
//   },
//   'complex key': 'много ключей',
//   ['key_' + (3 + 5)]: 'Computed key',
// };

// console.log(person);

// console.log(person['age']); // обращение через СТРОКОВУЮ составляющую (ключ ввиде строки)
// console.log(person['complex key']);
// console.log(person['key_8']);

// person.greet();
// person.age++; // работаю со значением как с обычным числом
// person.languages.push('by'); // добавляем в массив объекта данные

// person['key_4'] = undefined;

// delete person['key_4']; // удаление ключа в объекте

// console.log(person);

//-------------------------------------------------------------------

// ДЕСТРУКТУРИЗАЦИЯ

// const person = {
//   name: 'Владимир',
//   age: 30,
//   isProgrammer: true,
//   languages: ['ru', 'en', 'de'],
//   greet() {
//     console.log('greet from person');
//   },
//   'complex key': 'много ключей',
//   ['key_' + (3 + 5)]: 'Computed key',
// };

// const name = person.name;
// const age = person.age;
// const lang = person.languages;
// console.log(name, age, lang);

// длиннный код, и чтоб сократить запись пишем таким образом

// const { name, age = 10, languages: lang } = person; // ДЕСТРУКТУРИЗАЦИЯ мы пишем в фигурных ковычках названия ключей и после равно и название объекта. Через двоеточие после названия ключа, можно указать другое название переменной. Либо можно через знак "=" присвоить новое значение переменной
// console.log(name, age, lang);

//-------------------------------------------------------------------

// for (let key in person) {
//   console.log('key', key);
//   console.log('значение ключа:', person[key]);
// } // !!!!!!!!!!!!!!!!этот цикл fore in опасен тем, что он может заходить в prototype объекта и из-за этого могут быть проблемы. ЧТоб его избежать, нужно задать условие if (person.hasOwnProperty(key)) { }

// const keys = Object.keys(person); // метод объекта "keys", который получает ключи объёкта и помещает их в МАССИВ
// keys.forEach((key) => {
//   console.log('key', key);
//   console.log('значение ключа:', person[key]);
// }); // !!!!!этот метод НЕ БЕЖИТ ПО ПРОТОТИПУ И ПОЭТОМУ ТУ НЕ НУЖНО ПИСАТЬ ОТДЕЛЬНОГО УСЛОВИЯ!!!!!!

// СОКРАТИТЬ без переменной
// Object.keys(person).forEach((key) => {
//   console.log('key', key);
//   console.log('значение ключа:', person[key]);
// }); // !!!!!этот метод НЕ БЕЖИТ ПО ПРОТОТИПУ И ПОЭТОМУ ТУ НЕ НУЖНО ПИСАТЬ ОТДЕЛЬНОГО УСЛОВИЯ!!!!!!

// КОНТЕКСТ

// const person = {
//   name: 'Владимир',
//   age: 30,
//   isProgrammer: true,
//   languages: ['ru', 'en', 'de'],
//   greet() {
//     console.log('greet from person');
//   },
//   info() {
//     console.info('Информация про человека по имени', person.name); // если вызовем функцию person.info(), то будет выведено значение ключа name
//   },
//   infoThis() {
//     console.log(this); // покажет сам объёкт!!!!
//     console.info('Информация про человека по имени', this.name); // если вызовем функцию person.infoThis(), то будет выведено значение ключа name
//   },
//   'complex key': 'много ключей',
//   ['key_' + (3 + 5)]: 'Computed key',
// };

// person.info();
// person.infoThis();

// const logger = {
//   keys(obj) {
//     console.log('object keys', Object.keys(obj));ы
//   }, // вызываем функцию keys(person) где принимаем как параметр сам объёкт (ниже указываем его в функции при вызове функции)
// };
// ----------------------АЛЬТЕРНАТИВНЫЙ СПОСОБ
// const logger = {
//   keys() {
//     // без параметра
//     console.log('object keys', Object.keys(this)); // то же самое если напишем  Object.keys(logger));
//   }, // вызываем функцию keys(person) где принимаем как параметр сам объёкт (ниже указываем его в функции при вызове функции), но в данном варианте мы не указываем объект в аргументе, а сразу прописываем его через "this"
// };

// logger.keys(person);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!метод bind - возвращает новую функцию и мы её вызываем когда хотим
// const bound = logger.keys.bind(logger);
// const bound = logger.keys.bind(person);
// bound(); // т.е. эта функция становится универсальной и мы может передавать в неё любой объёкт

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!метод call - метод байндит эту фунцию и потом сразу же её и вызывает
// logger.keys.call(person);
