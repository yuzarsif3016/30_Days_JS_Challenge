let book = {
    title:"Archer",
    author:"Paulo Coelho",
    year:1999,
    greet : function(year){
        this.year = year
    }
}

console.log(book.greet(2010));

console.log(book.year);