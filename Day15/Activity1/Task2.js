function createCounter(){
    let counter = 0
    return{
        increment:function(){
            counter++;
        },
        getCurrentValue:function()
        {
            return counter;
        }
    };
}

const count = createCounter();

count.increment()

console.log(count.getCurrentValue());