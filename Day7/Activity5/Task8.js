let book = {
    title:"Archer",
    author:"Paulo Coelho",
    year:1999,
    
}


// Object.entries(book).forEach(([key,value])=>{
//     console.log(`${key} : ${value}`);
// })

for (let key in book) {
        
        console.log(`${key} : ${book[key]}`);
    
}