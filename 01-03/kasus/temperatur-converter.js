//celcius to fahrenhait
function cToF(celcius, fahrenhait){
    //celcius to fahrenhait
    var convertF = (celcius * (9/5)) + 32;
    console.log(celcius + ' Celcious degree = ' + convertF + ' Fahrenhait degree')

    //fahrenhait to celcius
    var convertC = (fahrenhait - 32) * (5/9);
    console.log(fahrenhait + ' Fahrenhait degree = ' + convertC + ' Celcious degree')
}

cToF(70,10);
cToF(100,212);
cToF(60,10);