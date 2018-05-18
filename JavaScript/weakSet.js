let weakSet = new WeakSet();

let obj = {msg: 'Hello'};

weakSet.add(obj);

console.log(weakSet.has(obj));


weakSet.delete(obj);
console.log(weakSet.has(obj));