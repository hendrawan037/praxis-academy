range = {
    from : 1,
    to: 5

};
range[Symbol.iterator] = function(){
    return {
        current : this.from,
        last: this.to,  

        next(){
            if (this.current <= this.last){
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
}
for (let num of range){
    console.log(num);
}

let greeting = ["Hello", "Good Morning", "Bye"];
for (let wole of greeting){
    console.log(wole);
}

//iterable object
const Lila = {
    name: 'Lila',
    height: `5'10"`,
    weight: 185,
    [Symbol.iterator]() {
        let index = 0; // use index to track properties 
        let properties = Object.keys(this); // get the properties of the object 
        let Done = false; // set to true when the loop is done 
        return { // return the next method, need for iterator 
            next: () => {
                Done = (index >= properties.length);
                // define the object you will return done state, value eg Lila ,key eg 
                //name
                let obj = {
                    done: Done,
                    value: this[properties[index]],
                    key: properties[index]
                };
                index++; // increment index
                return obj;
            }
        };
    }
};
for (let name of Lila){
    console.log(name);
}