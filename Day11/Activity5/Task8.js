const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data from promise 1'), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data from promise 2'), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data from promise 3'), 3000);
});

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('All promises resolved:');
        results.forEach((result, index) => {
            console.log(`Promise ${index + 1}:`, result);
        });
    })
    .catch(error => {
        console.error('One or more promises rejected:', error);
    });
