class Student {
  constructor() {
    this.excitement = 1;
  }

  writeCode = () => {
    this.excitement += 5;
  };
}

let bob = new Student();
bob.writeCode();
