

const myNums = [1,2,3,4,5,6,7,8,9,10 ]

//const newNums = myNums.filter(  (num) => num > 4  )

// const newNums = myNums.filter(  (num) => {
//   return  num >4
// })
 

// const newNums = []
// myNums.forEach (  (num) =>  {
//     if  (num > 4) {
//         newNums.push(num)
//     }
// 
// })

// console.log(newNums);




const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopian",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Classic",
        available: true
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 2001,
        genre: "Fiction",
        available: false
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 2003,
        genre: "Romance",
        available: true
    }
];




// const userBooks = books.filter (  (bk) => bk.genre =='Fiction' )

let userBooks = books.filter(  (bk) => {

     return bk.year >= 2000 && bk.genre ==='Romance'
})
console.log(userBooks);

// Example: Print all available books
//console.log("Available Books:");
//books.forEach(book => {
    //if (book.available) {
   //     console.log(`${book.title} by ${book.author}`);
   // }
//});
