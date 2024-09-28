// userModule.js
export class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  // main.js
  import { User } from './userModule.js';
  
  const user = new User('John', 30);
  user.sayHello(); // Hello, my name is John and I'm 30 years old.
  