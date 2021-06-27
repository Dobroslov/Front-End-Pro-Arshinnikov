// Функция замыкания - это когда из одной функции мы возвращаем другую функцию с сохранением некоторого контекста
function craateMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}
const lorWithLastName = craateMember('Владимир');
console.log(lorWithLastName(' Аршинников'));
console.log(lorWithLastName(' Нечипоренко'));
