let userName = getUserName()

function getUserName() {
  let answerUser = '';

  do {
    answerUser = prompt('Введи своё имя', 'Александр');
  } while (isValidUserName(answerUser)); // пока будет true будет обновляться цикл

  return answerUser;
}

function isValidUserName(message) {
  return (message === '' || message === null); // проверка валидности значения
}

document.getElementById('user_name').innerHTML = userName + ', это было интересное задание!'; // на странице нахожу по id="user_name" и через innerHTML присваиваю span переменную с именем и добавленной строкой


// document.getElementsByTagName('h1')[0].innerHTML = userName + ', это было интересное задание!';
