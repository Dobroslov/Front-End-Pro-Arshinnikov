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

// class Hamburger {
//   constructor(burger) {
//     this.burger = burger;
//   }

//   static SMALL_SIZE_BURGER = {
//     price: 50,
//     calories: 20,
//   };
//   static MEDIUM_SIZE_BURGER = {
//     price: 75,
//     calories: 30,
//   };
//   static BIG_SIZE_BURGER = {
//     price: 100,
//     calories: 40,
//   };

//   static STAFFING_CHEEZE = {
//     price: 10,
//     calories: 20,
//   };
//   static STAFFING_SALAD = {
//     price: 20,
//     calories: 5,
//   };
//   static STAFFING_SEASONING = {
//     price: 15,
//     calories: 0,
//   };
//   static STAFFING_MAYONNAISE = {
//     price: 20,
//     calories: 50,
//   };

//   get getPrise() {
//     return this.burger.price;
//   }
//   get getCalories() {
//     return this.burger.calories;
//   }
//   addTopping(staffing) {
//     this.burger.price = this.burger.price + staffing.price;
//     this.burger.calories = this.burger.calories + staffing.calories;
//   }
// }

// const hamburger1 = new Hamburger(Hamburger.BIG_SIZE_BURGER);
// console.log(hamburger1);

// hamburger1.addTopping(Hamburger.STAFFING_MAYONNAISE);
// hamburger1.addTopping(Hamburger.STAFFING_SEASONING);

// console.log('Цена с соусом: ' + hamburger1.getPrise);
// console.log('Калории с соусом: ' + hamburger1.getCalories);

// --------------------------------------------------------------------------------

class Hamburger {
  constructor(hamburger) {
    this.burger = hamburger;
    this.stuffings = [];
  }

  static BIG_SIZE_BURGER = {
    name: 'Большой бургер',
    price: 100,
    calories: 40,
  };
  static SMALL_SIZE_BURGER = {
    name: 'Маленький бургер',
    price: 50,
    calories: 20,
  };
  static MEDIUM_SIZE_BURGER = {
    price: 50,
    name: 'Средний бургер',
    calories: 20,
  };

  static STUFFING_CHEESE = {
    name: 'сырной начинкой',
    price: 10,
    calories: 20,
  };
  static STUFFING_SALAD = {
    name: 'салатом',
    price: 20,
    calories: 5,
  };
  static STUFFING_POTATO = {
    name: 'картошкой',
    price: 15,
    calories: 10,
  };
  static STUFFING_MAYO = {
    name: 'с майонезом',
    price: 15,
    calories: 0,
  };

  static STUFFING_SPICE = {
    name: 'с приправой',
    price: 10,
    calories: 5,
  };

  addStuffing(newStuffing) {
    return this.stuffings.push(newStuffing);
  }
  get getStuffings() {
    return this.stuffings;
  }
  get getStuffingsList() {
    const listStuffings = [];
    this.stuffings.forEach((element) => {
      listStuffings.push(element.name);
    });
    return listStuffings.join(', ');
  }
  getCalories() {
    // const caloriesArr = this.stuffings.map(
    //   (stuffingItem) => stuffingItem.calories
    // );
    // let calories = caloriesArr.reduce((acc, calories) => acc + calories, 0);
    // let resultCalories = calories + this.burger.calories;
    // return resultCalories;

    return this.stuffings.reduce(
      (acc, stuffing) => acc + stuffing.calories,
      this.burger.calories
    );
  }

  getPrice() {
    const priceArr = this.stuffings.map((staffingItem) => staffingItem.price);
    let price = priceArr.reduce((acc, prices) => acc + prices, 0);
    let resultPrice = price + this.burger.price;
    return resultPrice;
  }
}

const hamburger1 = new Hamburger(Hamburger.BIG_SIZE_BURGER);

hamburger1.addStuffing(Hamburger.STUFFING_MAYO);
hamburger1.addStuffing(Hamburger.STUFFING_SPICE);
console.log(
  `Вы выбрали: ${hamburger1.burger.name} c ${hamburger1.getStuffingsList}. Итого: ${hamburger1.getStuffings.length} начинками`
);
console.log(`Количество калорий: ${hamburger1.getCalories()}`);
console.log(`Цена за бургер: ${hamburger1.getPrice()}`);
