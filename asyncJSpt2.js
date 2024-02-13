function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation with setTimeout
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                // Successful
                resolve(`Data fetched successfully: ${rand}`);
            } else {
                // Reject
                reject('Error: Failed to fetch data');
            }
        }, 2000);
    });
}

console.log('Fetching data...');
fetchData()
    .then((data) => {
        // successful
        console.log(data);
    })
    .catch((error) => {
        // rejected
        console.error(error);
    });