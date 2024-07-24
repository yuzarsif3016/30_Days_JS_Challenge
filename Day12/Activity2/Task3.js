function divideByZero(dividend,divisor)
{
    try {
        if(divisor === 0){
            throw new Error("Divide by Zero")
        }
        return  dividend / divisor

    } catch (error) {
        console.error("Error in Function " , error.message);
    }
    finally{
        console.log("Operation Completed");
    }
}

console.log(divideByZero(10,0));