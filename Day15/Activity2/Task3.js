function createUniqueId(){
    let id = 0

    return function(){
        id++
        return id;
    }
}

const generator = createUniqueId();

console.log(generator());
console.log(generator());
console.log(generator());

