fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=>
{
    return res.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error occured...");
})