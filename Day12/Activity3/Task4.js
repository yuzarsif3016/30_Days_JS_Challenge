class CustomError extends Error
{
    constructor(msg){
        super(msg)
        this.name = 'custom error'
    }
}

function riskyOp(condition){
    if(!condition){
        throw new CustomError('Something Went Wrong')
    }

    return "Opration Succesfull"
}

try {
    const result = riskyOp(false)
    console.log(result);
} catch (error) {
    if(error instanceof CustomError){
        console.log(`Error Caught ${error.message}`);
    }
    else{
        console.error(`An unexpected error occured`);
    }
}