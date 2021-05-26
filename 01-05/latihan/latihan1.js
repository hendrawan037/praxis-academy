let name= "budi";
console.log(name.length);

let doh = "doh";
console.log(doh.toUpperCase());
let squence = [1,2,3];
squence.push(0);
console.log(squence.push(5));
console.log(squence);
console.log(squence.pop());
console.log(squence);

let day1 = {
    squirrel : false,
    events : ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let description = {
    work : "we go to working every day",
    "touced tree" : "touched a tree"
};

console.log(description["touced tree"]);

let anObject={
    left: 1,
    right: 2
};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

console.log(Object.keys({x: 1, y: 2, z: 0}));

//functioan assign
let objectA = {a: 1, b: 2};
Object.assign(objectA,{b: 3, c: 5});
console.log(objectA);

//array of object
let journal = [
    {events : ["work", "touched tree", "pizza", "running", "television"],
    squirrel : false},
    {events : ["work", "ice cream", "cauliflower","lasagna", "touched tree", "brused teeth"],
    squirrel : false},
    {events : ["weekend", "cycling", "break", "peanuts","beer"],
    squirrel : true}
]

//object, property and method
let car = { //object
    //property
    color : "red",
    model : 400,
    merk : "biasa",
    //method
    start : ()=>console.log("car has started"),
    drive : ()=>console.log("car has on the way"),
    brake : ()=>console.log("car brake again"),
    stop  : ()=>console.log("car is stop")
};
//access the object property n method above
console.log(car.color);
car.brake();

let salaries ={
    John : 100,
    Pete : 300,
    Mary : 250
};
function sumSalaries(){
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum
}
console.log(sumSalaries(salaries));

let user ={
    name : "John",
    age : 26
};  

function count(obj){
    return Object.keys(obj).length;
}
console.log(count(user));