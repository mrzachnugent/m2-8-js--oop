// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and
//    happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times
//   that number. So if the cat has a tiredness of `50`, and sleeps for 10
//   hours, their tiredness will be reduced to 0 (10 * 5).
// - Write an eat method that accept number of kibbles and reduces hunger by 1/5
//   that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times
//   that number.
// - the happiness property should be modified all of the above methods as well.
//
// You decide how much sleep, eat, and play affects your cat's happiness.

class Cat {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }
  sleep = (hours) => {
    this.tiredness += -hours * 5;
    this.happiness += hours;
    return this;
  };
  eat = (kibs) => {
    this.hunger -= kibs / 5;
    this.happiness += kibs;
    return this;
  };
  play = (min) => {
    this.loneliness -= 3 * min;
    this.happiness += 5 * min;
    return this;
  };
}

let boots = new Cat("boots", "Simaese");
boots.hunger = 50;
boots.tiredness = 50;
boots.loneliness = 50;
boots.sleep(3).play(5).eat(15);
console.log(boots);
// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.
// Cat {
//     sleep: [Function: sleep],
//     eat: [Function: eat],
//     play: [Function: play],
//     name: 'boots',
//     species: 'Simaese',
//     tiredness: 35,
//     hunger: 47,
//     loneliness: 35,
//     happiness: 43
//   }
