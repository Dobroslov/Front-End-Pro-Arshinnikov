const heading = document.getElementById('hellow');
// получение объекта или узла по id

// const heading2 = document.getElementsByTagName('h2')[0]; // устарел

// const heading2 = document.getElementsByClassName('h2-class');// устарел
// const heading2 = document.querySelector('h2');
// const heading2 = document.querySelector('.h2-class');
// const heading2 = document.querySelector('#h2-id');

const heading2 = document.querySelector('h2');

// const heading3 = heading2.nextElementSibling; // получаем следующий элемент за h2
const h2List = document.querySelectorAll('h2'); // получаю список всех элементов h2
// const heading3 = h2List[1]; // так как через querySelectorAll('h2') я получил массив, то нужный элемент я нахожу через значение length

const heading3 = h2List[h2List.length - 1]; // или вот таким способом
console.log(heading3);
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
  addStylesTo(
    heading,
    'Пусть Земля будет самой СЧАСТЛИВОЙ ЦВЕТУЩЕЙ И ПРЕКРАСНОЙ во Вселенной!!!',
    'yellow'
  );
}, 1500);

setTimeout(() => {
  addStylesTo(
    heading2,
    'Пусть все семьи будут счастливы, дружны и крепки',
    'blue',
    '4rem'
  );
}, 2500);

setTimeout(() => {
  addStylesTo(heading3, 'Пусть по всей земле будут пространства любви!!!');
}, 4000);

function addStylesTo(node, text, color = 'white', fontSize) {
  // node.textContent =
  //   'Пусть Земля будет самой СЧАСТЛИВОЙ ЦВЕТУЩЕЙ И ПРЕКРАСНОЙ во Вселенной!!!';
  // изменение содержания элемента

  node.textContent = text;
  node.style.color = color; // смена цвета
  node.style.textAlign = 'center'; // по центру размещаем
  node.style.backgroundColor = '#1082ec';
  node.style.padding = '2rem';

  if (fontSize) {
    // значение по умолчанию будет '', undefined, null, false и если нет, тогда выполниться условие
    node.style.fontSize = fontSize;
  }
}

//developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
  if (heading.style.color === 'yellow') {
    heading.style.color = 'blueviolet';
    heading.style.backgroundColor = '#138f0f';
  } else {
    heading.style.color = 'yellow';
    heading.style.backgroundColor = '#8a2c34';
  }
};

heading2.addEventListener('dblclick', () => {
  if (heading2.style.color === 'yellow') {
    heading2.style.color = 'fuchsia';
    heading2.style.backgroundColor = '#138f0f';
  } else {
    heading2.style.color = 'yellow';
    heading2.style.backgroundColor = '#8a2c34';
  }
});
