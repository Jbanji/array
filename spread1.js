let obj1 = { name: 'Bubu', age: 12 };
let obj2 = { occupation: 'Criminal' };
let mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // { name: 'Bubu', age: 12, occupation: 'Criminal' }
