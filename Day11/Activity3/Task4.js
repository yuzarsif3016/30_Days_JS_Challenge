// write a async function that waits for a promise to resolve and then log the resolved value


const examplePromise = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove("This is msg from promise")
    },2000)
});

async function logResolvedValue(promise){
    try {
        const resolvedValue = await promise;
        console.log(resolvedValue);
    } catch (error) {
        console.error("Error aagyi jee" , error.message);
    }
}

logResolvedValue(examplePromise);