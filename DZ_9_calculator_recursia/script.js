// 1) Создаём функцию const calc = createCalculator(100)
// 2) calc.add(45) калькулятор добавляет к базовому значению и обновляет его. 145
// 3) calc.add(45) считает от предыдущего результата 190
// 4) calc.sub(50) отнимает от базового значения.
// 5) calc.set(500) обновляет базовое значение и потом счёт идёт с него


function createCalculator(currentValue) {
  let resultCalculetion = currentValue; // переменная для результата(первое значение по умолчанию "100")

  // return { // создаём объёкт и в него через ключи прописываем функции
  //   addition: function(value) {
  //     return resultCalculetion += value;
  //   },
  //   subtraction: function(value) {
  //     return resultCalculetion -= value;
  //   },
  //   multiplication: function(value) {
  //     return resultCalculetion *= value;
  //   },
  //   division: function(value) {
  //     return resultCalculetion /= value;
  //   },
  //   set: function(value) {
  //     return resultCalculetion = value;
  //   }
  // }  // без сокращений для себя

  return {
    addition: (value) => resultCalculetion += value,
    subtraction: (value) => resultCalculetion -= value,
    multiplication: (value) => resultCalculetion *= value,
    division: (value) => resultCalculetion /= value,
    set: (value) => resultCalculetion = value,    
  }
} // сокращённая версия через стрелочные функции

const calc = createCalculator(100); // запуск функции с начальным значением "100"


