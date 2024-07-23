const delayedMsg = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("This is after 2 sec msg")
    },2000)
});

delayedMsg.then((msg)=>{
    console.log(msg);
})