// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.
class Cat {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }
  wait = (min) => {
    this.tiredness += min * 2;
    this.hunger += min * 3;
    this.loneliness += min * 1;
    this.happiness -= min * 1;
  };
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
// B) Make Boots wait 20 minutes and call then console.log(boots);

const boots = new Cat("Boots", "Sayameez");

boots.wait(20);

console.log(boots);

// Cat {
//     wait: [Function: wait],
//     sleep: [Function: sleep],
//     eat: [Function: eat],
//     play: [Function: play],
//     name: 'Boots',
//     species: 'Sayameez',
//     tiredness: 40,
//     hunger: 60,
//     loneliness: 20,
//     happiness: -20
//   }
