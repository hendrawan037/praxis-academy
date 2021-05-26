// function aro(a,b){
//     function aroSecond(x) { //this is nested function because this function in the other function
//         return x * x;
//     }
//     console.log(aroSecond(5)); //this functiona only can be fork here
//     return aroSecond(a) + aroSecond(b);
    
// }
// console.log(aro(2,5));
// //console.log(aroSecond(5)) //this function can not be fork in line, coz that function is scope and closure


// const greeting = (name) => {
//     const hello = () => `hello ${name}!`;
//     return hello();
// }
// console.log(greeting("adam"))

// let name = "john";

// const greeting = () => {
//     let name = "adam";
//     return `hello ${name}`;
// }
// console.log(greeting());

// let firsName = "jeje";

// const speaking = ()=>{
//     let name = "jaja";
//     return `hello ${firsName} and ${name}`;
// }

// console.log(speaking())

// let name ="john";
// function sayHi(){
//     console.log("hai " + name);
// }
// name = "pete";

// sayHi();

// function weWork(){
//     let name = "Pete";
//     return function(){
//         console.log(name);
//     }
// }

// let name = "John";
// let work = weWork();

// work(); 

// function init(){
//     let name = "Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }
// init();

function makeFunc(){
    var name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

var myFunc= makeFunc();
myFunc();

function add(x){
    return function(y){
        return x+y;
    }
}

let loadu = add(10);
console.log(loadu(2));