const delayedMsg = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('this is error msg after 2 sec')
    },2000)
});

delayedMsg.catch((msg)=>{
    console.log(msg);
})