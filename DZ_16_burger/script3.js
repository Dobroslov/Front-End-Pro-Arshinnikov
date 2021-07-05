'user strict';

// Сеть фастфудов предлагает несколько видов гамбургеров:

//     маленький (50 тугриков, 20 калорий)
//     средний (75 тугриковб 30 каллорий)
//     большой (100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

//     сыром (+ 10 тугриков, + 20 калорий)
//     салатом (+ 20 тугриков, + 5 калорий)
//     картофелем (+ 15 тугриков, + 10 калорий)
//     посыпать приправой (+ 15 тугриков, 0 калорий)
//     полить майонезом (+ 20 тугриков, + 5 калорий).

// При этом начинок можно добавить несколько или не быть совсем

// Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, статические константы, методы для выбора опций и рассчета нужных величин).

// Пример работы кода:

// const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.TOPPING_POTATO);

class Hamburger {
  constructor(hamburger, stuffing) {
    this.burger = hamburger;
    this.stuffing = stuffing;
    this.topping = [];
  }
  static SIZE_SMALL = {
    name: 'SIZE_SMALL',
    price: 50,
    calories: 20,
  };
  static SIZE_LARGE = {
    price: 50,
    name: 'SIZE_LARGE',
    calories: 20,
  };

  static STUFFING_CHEESE = {
    name: 'STUFFING_CHEESE',
    price: 10,
    calories: 20,
  };
  static STUFFING_SALAD = {
    name: 'STUFFING_SALAD',
    price: 20,
    calories: 5,
  };
  static STUFFING_POTATO = {
    name: 'STUFFING_POTATO',
    price: 15,
    calories: 10,
  };

  static TOPPING_MAYO = {
    name: 'TOPPING_MAYO',
    price: 15,
    calories: 0,
  };
  static TOPPING_SPICE = {
    name: 'TOPPING_SPICE',
    price: 10,
    calories: 5,
  };
  addTopping(topping) {
    if (!this.topping.includes(topping)) {
      return this.topping.push(topping);
    } else {
      console.log('Такая добавка уже есть, копия будет удалена');
    }
  }

  get getToppings() {
    return this.topping;
  }

  removeTopping(objTopping) {
    console.log('Удаление соуса', objTopping);
    return (this.topping = this.topping.filter(
      (element) => element !== objTopping.name
    ));
  }

  calculateCalories() {
    const caloriesArr = this.topping.map((toppingItem) => toppingItem.calories);
    let calories = caloriesArr.reduce((acc, calories) => acc + calories, 0);
    let resultCalories = calories + this.burger.calories + this.stuffing.calories;   
    return resultCalories;
  }
  
  calculatePrice() {
    const priceArr = this.topping.map((toppingItem) => toppingItem.price);
    let price = priceArr.reduce((acc, prices) => acc + prices, 0);
    let resultPrice = price + this.burger.price + this.stuffing.price;   
    return resultPrice;
  }
}
// console.log(Hamburger.topping);

// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);

// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger.topping);

console.log('Цена за бургер', hamburger.calculatePrice());

// спросим сколько там калорий
console.log('Количество калорий', hamburger.calculateCalories());

// console.log('Количество добавленных соусов: ', hamburger.getToppings.length);
// сколько стоит

// // я тут передумал и решил добавить еще приправу

hamburger.addTopping(Hamburger.TOPPING_SPICE);
// // А сколько теперь стоит?
// console.log('Плюс еще одни соус', hamburger.calculatePrice());
// // Проверить, большой ли гамбургер?
// console.log(
//   'Is hamburger large: %s',
//   hamburger.getSize() === Hamburger.SIZE_LARGE
// ); // -> false
// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log('Have %d toppings', hamburger.getToppings().length); // 1

// // не передали обязательные параметры
// var h2 = new Hamburger(); // => HamburgerException: no size given

// // передаем некорректные значения, добавку вместо размера
// var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);
// // => HamburgerException: invalid size 'TOPPING_SAUCE'

// // добавляем много добавок
// var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // HamburgerException: duplicate topping 'TOPPING_MAYO'
