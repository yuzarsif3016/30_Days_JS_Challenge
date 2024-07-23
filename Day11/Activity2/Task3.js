const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Fetched data from server 1");
    }, 1000);
});

const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Fetched data from server 2");
    }, 2000);
});

const fetchData3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Fetched data from server 3");
    }, 3000);
});

fetchData1
    .then(message1 => {
        console.log(message1);
        return fetchData2;
    })
    .then(message2 => {
        console.log(message2);
        return fetchData3;
    })
    .then(message3 => {
        console.log(message3);
    })
    .catch(error => {
        console.error("An error occurred:", error.message);
    });
