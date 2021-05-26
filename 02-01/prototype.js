// let foo = {name: "foo", one: 1, two: 2};
// let bar = {two: "two", three: 3};

// Object.setPrototypeOf(bar,foo);
// console.log(bar.one);
// console.log(bar.two);
// console.log(bar.name);
// console.log(bar.three);

// let foo = {one: 1, two: 2};
// bar = Object.create(foo);
// bar.three = 3;
// console.log(bar.two);
// let a ={
//     b: function() {
//         return 'woy!';
//     }
// }

// console.log(a.b);
// console.log(a.b());

// function cek() { }

// console.log(cek.__proto__ = a.b)

//memahami prototype di js
// let o = {
//     a: 2,
//     h: function(){
//         return this.a+1;
//     }
// };
// console.log(o.a);
// console.log(o.h);
// console.log(o.h());

// let bird= {fly: true,color: "brown"};
// let eagle ={};
// eagle.__proto__=bird;
// console.log(eagle.color);
// console.log(eagle.fly);

// let x = {
//     a: 1,
//     m: function(c){
//         return this.a + this.b +c;
//     }
// };
// let y = {
//     b: 2,
//     __proto__ : x
// };
// let z = {
//     __proto__: y
// };

// console.log(y.m(10));
// console.log(z.m(20));

// let car = {
//     color: "blue",
//     run: function(){return "the car is running"}
// }
// let avanza =Object.create(car);
// console.log(avanza.run());

// let j = {
//     a: 1,
//     m: function(c){
//         return this.a + this.b + c;
//     }
// };
// let k = Object.create(j,{b:{value: 2}});
// let l = Object.create(k);

// console.log(k.m(10));
// console.log(l.m(20));

let parent = {
    hair: "curly",
    eyes: "blue"
};

let children = Object.create(parent);
console.log("parent hair is " + parent.hair + " & parent eyes is " + parent.eyes);
console.log("childern hair is " + children.hair + " & children eyes is " + children.eyes + "\n");

console.log("set parent hair to straight \n");
parent.hair = "straight";

console.log("parent hair is " + parent.hair + " & parent eyes is " + parent.eyes);
console.log("childern hair is " + children.hair + " & children eyes is " + children.eyes + "\n");

console.log("set eyes children to green \n");
children.eyes = "green";

console.log("parent hair is " + parent.hair + " & parent eyes is " + parent.eyes);
console.log("childern hair is " + children.hair + " & children eyes is " + children.eyes);

