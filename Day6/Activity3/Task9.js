const numbers = [1, 2, 3, 4, 5];



const sum = numbers.reduce((counter,index)=>{
    return counter+index
},0);

console.log(sum);
