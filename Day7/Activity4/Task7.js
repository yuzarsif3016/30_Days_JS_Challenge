let book = {
    title:"Archer",
    author:"Paulo Coelho",
    year:1999,
    greet : function(){
        console.log(`${this.title} is written by ${this.author}`);
    }
}

console.log(book.greet());