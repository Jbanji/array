// mathModule.js
export function add(x, y) {
    return x + y;
  }
  
  export function subtract(x, y) {
    return x - y;
  }
  
  // main.js
  import { add, subtract } from './mathModule.js';
  
  console.log(add(5, 3)); // 8
  console.log(subtract(10, 4)); // 6
  