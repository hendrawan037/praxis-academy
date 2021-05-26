let shape = {
    type:'',
    getType: function(){       
        return this.type;
    }
};

function Triangle(a,b,c){
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.getParimeter = function(){
    return this.a + this.b + this.c;
};
Triangle.prototype.constructor = Triangle;

let t = new Triangle(1,2,3);
let test0 = t.constructor === Triangle;
console.log(test0);
let test1 = shape.isPrototypeOf(t);
console.log(test1);
console.log(t.getParimeter());
console.log(t.getType());
for (let i; i<t.size; i++){
    console.log(i);
}
//[1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();
