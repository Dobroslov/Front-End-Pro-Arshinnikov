const heading = document.getElementById('hellow');
// получение объекта или узла по id

// const heading2 = document.getElementsByTagName('h2')[0]; // устарел

// const heading2 = document.getElementsByClassName('h2-class');// устарел
// const heading2 = document.querySelector('h2');
// const heading2 = document.querySelector('.h2-class');
const heading2 = document.querySelector('#h2-id');
console.log(heading2);

// console.dir(heading.id); // получение id элемента
// console.dir(heading.textContent); // получение содержания тега
// setTimeout(() => {
//   heading.textContent =
//     'Пусть Земля будет самой СЧАСТЛИВОЙ ЦВЕТУЩЕЙ И ПРЕКРАСНОЙ во Вселенной!!!';
//   // изменение содержания элемента
//   heading.style.color = 'white'; // смена цвета
//   heading.style.textAlign = 'center'; // по центру размещаем
//   heading.style.backgroundColor = '#1082ec';
//   heading.style.padding = '2rem';
// }, 1500);

setTimeout(() => {
  addStylesTo(heading);
}, 1500);

function addStylesTo(node) {
  node.textContent =
    'Пусть Земля будет самой СЧАСТЛИВОЙ ЦВЕТУЩЕЙ И ПРЕКРАСНОЙ во Вселенной!!!';
  // изменение содержания элемента
  node.style.color = 'white'; // смена цвета
  node.style.textAlign = 'center'; // по центру размещаем
  node.style.backgroundColor = '#1082ec';
  node.style.padding = '2rem';
}
