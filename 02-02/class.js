//class decalration
//class can't hosted like a function
// class Rectangle{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     };
// };

//class expresion
// let Rectangle = class{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
// }

// console.log(Rectangle.name)
// let Rectangle = class Rectangle2 {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     };
// };

// console.log(Rectangle.name);

//prototype method

// class Rectangle{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     //getter
//     get area(){
//         return this.calcArea();
//     }
//     //method
//     calcArea(){
//         return this.height * this.width;
//     }
// }
// const square = new Rectangle(10,10);
// console.log(`luas square: ${square.area}`);

// static method
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

p1.distance;
p2.distance;

console.log(Point.distance(p1,p2));

// class Animal {
//     speak(){
//         return this;
//     }
//     static eat(){
//         return this;
//     }
// }
// let obj = new Animal();
// console.log(obj.speak());
// let speak = obj.speak
// console.log(speak());

// console.log(Animal.eat())
// let eat = Animal.eat
// console.log(eat());

function Animal(){}

Animal.prototype.speak = function(){
    return this;
}
Animal.eat = function(){
    return this;
}
let obj = new Animal();
let speak = obj.speak;
speak();

let eat = Animal.eat;
eat();

//public field declaration
class Rectangle{
    height;
    width = 0;
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}

//private field daclaration
// class Rectangle {
//   #height = 0;
//   #width;
//   constructor(height, width) {    
//     this.#height = height;
//     this.#width = width;
//   }
// }

//to make subclass using extend
class Pet{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} make a noise`);
    }
}
class Dog extends Pet{
    constructor(name){
        super(name);
    }
    speak(){
        console.log(`${this.name} bark`);
    }
}

let d = new Dog("Mauniz");
d.speak();

const Bird = {
    speak(){
        console.log(`${this.name} make a noise`)
    }
}
class Kakatua{
    constructor(name){
        this.name = name;
    }
}
Object.setPrototypeOf(Kakatua.prototype, Bird);
let owl = new Kakatua("Coco");
owl.speak();

class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() { return Array; }
  }
  
  let a = new MyArray(1,2,3);
  let mapped = a.map(x => x * x);
  
  console.log(mapped instanceof MyArray); // false
  console.log(mapped instanceof Array);   // true

  //super 
  class Cat{
      constructor(name){
          this.name = name;
      }
      speak(){
          console.log(`${this.name} this is enough`);
      }
  }

  class Lion extends Cat{
      speak(){
          super.speak();
          console.log(`name is ${this.name}`)
      }
  }

let g = new Lion("Moyunn");
g.speak();