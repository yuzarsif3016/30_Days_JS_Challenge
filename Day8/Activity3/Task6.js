function addRestSum(...num){

    let sum = 0
    for(let n of num)
    {
        sum += n;
    }
    return sum;
}

console.log(addRestSum(10,20,40,50,60));