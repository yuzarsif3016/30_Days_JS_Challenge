function randomResolveReject() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() >= 0.5; // Randomly decide if the promise should resolve or reject
        setTimeout(() => {
            if (isSuccess) {
                resolve('Promise resolved successfully!');
            } else {
                reject(new Error('Promise rejected.'));
            }
        }, 1000); // Simulate an asynchronous operation with a delay
    });
}

async function handlePromise() {
    try {
        const message = await randomResolveReject();
        console.log(message); // Logs the resolve message if the promise is resolved
    } catch (error) {
        console.error('An error occurred:', error.message); // Logs the error message if the promise is rejected
    } finally {
        console.log('Operation completed.'); // Always logs this message
    }
}

// Example usage:
handlePromise();
