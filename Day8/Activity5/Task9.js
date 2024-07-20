const bookTitle = "MERI KAHANI";
const bookAuthor = "MEIN KHUD";

const book = {
    // Using property shorthand
    title: bookTitle,
    author: bookAuthor,

    // Defining a method using method shorthand
    getSummary() {
        return `${this.title} by ${this.author}`;
    },

    // Another method
   getAuthor(){
    return this.author
   },
   getTitle()
   {
    return this.title
   }
};

// Logging the object
console.log(book);

// Logging the method outputs
console.log(book.getSummary()); // Output: MERI KAHANI by MEIN KHUD
console.log(book.getTitle());   // Output: MERI KAHANI
console.log(book.getAuthor());  // Output: MEIN KHUD
