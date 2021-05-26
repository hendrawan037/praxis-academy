// contoh syntax switch-case

// switch (expression) {
//     case label_1:
//       statements_1
//       [break;]
//     case label_2:
//       statements_2
//       [break;]
//       ...
//     default:
//       statements_def
//       [break;]
//   }

//   contoh penerapannya:
var fruittype = 'Telo'
  switch (fruittype) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
      console.log('Mangoes are $0.56 a pound.');
      break;
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
     console.log('Sorry, we are out of ' + fruittype + '.');
  }
  console.log("Is there anything else you'd like?");