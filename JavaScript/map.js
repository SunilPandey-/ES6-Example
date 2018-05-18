

var map = new Map(); 
map.set('name','Tutorial Point'); 
map.set('null','sunil');
map.set('null','sunil1');
map.set('undefined','sunil12');
map.set(undefined,'sunil1244');
document.getElementById("demo1").innerHTML =map.get(undefined); // Tutorial point
//document.getElementById("demo1").innerHTML =map.keys();
console.log(map.has('snl'));
console.log(map.size);

var keyss = map.keys();
for(let ke of keyss){
    console.log(ke);
}

for(let ele of map){
    console.log(ele);
}