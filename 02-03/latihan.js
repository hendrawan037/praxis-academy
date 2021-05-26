var books = [
    {name:'JavaScript', pages:450}, 
    {name:'Angular', pages:902},
    {name:'Node', pages:732}
  ];
  /* Imperative Pattern */
  for (var i = 0; i < books.length; i++) {
    books[i].lastRead =  new Date();
  }
  /* Declarative Pattern */
  books.map((book)=> {
    book.lastReadBy = 'me';
    return book;
  });
  console.log(books);

  function generateAdder(adder){
      return function(input){
          return input + adder;
      }
  }

  let addTwo = generateAdder(2);
  console.log(addTwo(5));