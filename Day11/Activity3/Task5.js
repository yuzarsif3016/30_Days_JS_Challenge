const examplePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Promise is failed after waiting for decades')
    },2000);
});

async function rejectWait(promise){
    try {
        const rejectVal = await promise;
        console.log(rejectVal);
    } catch (error) {
        console.error("Error aa gyi jee ", error);
    }
}

rejectWait(examplePromise)