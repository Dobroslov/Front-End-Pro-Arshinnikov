class EarthSurface {
  constructor(land, water, fire) {
    this.land = land;
    this.water = water;
    this.fire = fire;
  }
  gravity() {
    alert(
      `Благодаря силе притяжения на нашей планете есть - ${this.land} и ${this.water}`
    );
  }
  internalHeating() {
    alert(
      `Ядро нашей планеты вырабатывает достаточно много ${this.fire}, чтоб согревать планету изнутри, частично согревая существующее разнообразие природы, а так же формирует новые горы и новый рельеф нашей планеты`
    );
  }
}

class Steppe extends EarthSurface {
  constructor(land, water, grass, animals) {
    super(land, water);
    this.grass = grass;
    this.animals = animals;
  }

  createSteppe() {
    return alert(
      `Степь формируется за счёт ${this.land}, а так же ${this.water} в виде осадков. Это даёт возможность расти большому количеству ${this.grass} на территориях степей`
    );
  }

  animalsLive() {
    alert(
      `Наличие небольшого разнообразия ${this.grass} даёт возможность жизни для ${this.animals}`
    );
  }
}

class Forest extends Steppe {
  constructor(grass, fire, water, animals, obj) {
    super(grass, fire, water, animals);
    this.tree = obj.tree;
    this.bushes = obj.bushes;
  }

  createFores() {
    alert(
      `Если есть баланс ${this.fire} присутствует ${this.water}, тогда пояляется более разнообразная жизнь в виде ${this.tree}, ${this.bushes} и более крупных ${this.animals}`
    );
  }
}
// степь
// пустыня
// леса
// дубравы

let earth = new EarthSurface('СушА', 'ВодА', 'Тепла');
earth.gravity();
earth.internalHeating();

let nature = new Steppe('СушИ', 'ВодЫ', 'Травы', 'Животных');
nature.createSteppe();
nature.animalsLive();
// console.log(nature.this.animals);
let bigForest = new Forest('Трав', 'ТемпературЫ', 'ВодА', 'Животных', {
  tree: 'Деревьев',
  bushes: 'Кустов',
});
bigForest.createFores();
