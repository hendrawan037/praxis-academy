//this function define literal
function timesTwo(params) {  return params * 2}

//in thes ES6, use the arrow function. as the same above
var timesTwo = (params) => {
    return params * 2}

//it is simple arrow function. this is same above
var timesTwo = params => params * 2

//call function
  var result = timesTwo(4);  // 8
  console.log(result)
