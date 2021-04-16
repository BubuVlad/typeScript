import { Test } from "./scripts/interfaces";

class Machine implements Test {
  public name: string;
  public age: number;
  constructor() {
    this.name = "Vlad";
    this.age = 36;
  }
}

const x = new Machine();
console.log(`Olla: ${x.name}`);