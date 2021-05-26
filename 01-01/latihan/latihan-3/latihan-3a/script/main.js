// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World';

// let myVariable = "my first variable in java script";
// myVariable = "i can change the variable"
// console.log(myVariable);

// let iceCream = "chocholate";
// if (iceCream === "chocolate") {
//     alert("Yay, i love chocolate ice cream");
// } else {
//     alert ("awww, but chocholate ice creame is my favorite")
// }

// myVariable = document.querySelector('h1');
// alert('hello World')

// function multiply(num1, num2){
//     let result =  num1 * num2;
//     return result 
// }

// console.log(multiply(2,3));
// document.querySelector('html').onclick = function(){
//     alert("ouch..., stop poking me!");
// }

// let myImage = document.querySelector('img');

// myImage.onclick = function(){
//     let mySrc = myImage.getAttribute('src');    
//     if (mySrc === 'images/firefox-icon.png'){
//         myImage.setAttribute('src','images/Firefox2.png');
//     }else{
//         myImage.setAttribute('src','images/firefox-icon.png');
//     }
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt("please insert your name");
    if (!myName || myName === null){
        setUserName();
    } else{
        localStorage.setItem('name', myName);
        myHeading.textContent= "Mozill is cool, " + myName;
    }
}
if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = "Mozill is cool, " + storeName;
}
myButton.onclick = function(){
    setUserName();
}