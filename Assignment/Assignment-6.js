let books = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        number: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        number: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        number: 352
    }
]

// books title
console.log("book1 title", books[0].title)
console.log("book2 title", books[1].title)
console.log("book3 title", books[2].title)

// books author
console.log("book1 author", books[0].author)
console.log("book2 author", books[1].author)
console.log("book3 author", books[2].author)

// books number
console.log("book1 number", books[0].number)
console.log("book2 number", books[1].number)
console.log("book3 number", books[2].number)

books.push(
    {
        title: "Learning JavaScript Design Patterns,",
        author: "Addy Osmani",
        number: 254
    }
)
console.log("----- after adding the books-----")
console.log("Number of books", books.length)

let lastBook = books.slice(-2)
console.log("last book ", lastBook)

books.shift()
console.log("----after the delete first book -------")
console.log("number of books", books.length)

const totalBooks = books[0].number + books[1].number + books[2].number
console.log("total books page ",totalBooks)