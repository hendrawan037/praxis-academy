let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool');

console.log(map.get(1));
console.log(map.get('1'));

console.log(map)

// use a object as keys of map
let john = { name: "john" };
let visitCountMap = new Map();
visitCountMap.set(john, 123);
console.log(visitCountMap.get(john));

let visitCountObj = {};
console.log(visitCountObj);
visitCountObj[john] = 123;
console.log(visitCountObj);
console.log(visitCountObj["[object Object]"]);

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}
for (let amount of recipeMap.values()) {
    console.log(amount);
}
for (let entry of recipeMap) {
    console.log(entry);
}
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`)
});

let mapArr = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool']
]);
console.log(mapArr);
let objPeople = {
    name: "Arif",
    age: 21
};
let mapPeople = new Map(Object.entries(objPeople));
console.log(mapPeople.get('name'));

let price = Object.fromEntries([
    ['banana', 1],
    ['tomatoes', 2],
    ['meat', 4]
]);
console.log(price);

let mapFruit = new Map();
mapFruit.set('banana', 1);
mapFruit.set('orange', 2);
mapFruit.set('meat', 4);

let objFruit = Object.fromEntries(mapFruit);
console.log(objFruit);

//set

let setVisitor = new Set();
let john = { name: "John" };
let marry = { name: "marry" };
let pete = { name: "pete" };

setVisitor.add(john);
setVisitor.add(marry);
setVisitor.add(pete);
setVisitor.add(marry);
setVisitor.add(pete);
setVisitor.add(john);

console.log(setVisitor.size);
for (visitor of setVisitor) {
    console.log(visitor.name);
}
