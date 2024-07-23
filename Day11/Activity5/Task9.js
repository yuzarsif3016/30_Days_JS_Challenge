const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data from promise 1'), 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data from promise 2'), 1000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data from promise 3'), 2000);
});

Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log('First promise resolved with:', result);
    })
    .catch(error => {
        console.error('First promise rejected with:', error);
    });
