async function handleApi(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.error("AA gyi Error..", error);
    }
}

handleApi()