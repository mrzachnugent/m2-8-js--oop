class Dog {
  constructor() {
    this.hunger = 0;
    this.food = {amount = 5}
  }

  remaining = () => {
    console.log(this.food.amount);
  };
}

let fido = new Dog();
fido.remaining();
