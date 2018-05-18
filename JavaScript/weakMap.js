let weakmap = new WeakMap();

let obj = {};
let obj1 ={};
weakmap.set(obj,'Hello');
weakmap.set(obj,'Hello1');
//weakmap.set("obj",'Hello1');  Error

console.log(weakmap.get(obj));
console.log(weakmap.has(obj));
console.log(weakmap.has(obj1));