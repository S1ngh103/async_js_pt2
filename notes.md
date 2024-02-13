# Asynchronous JavaScript Part 2

### Promises are objects used for asynchronous programming in JavaScript.
- They represent the eventual success or failure of an asynchronous operation.
- Promises provide a cleaner alternative to callback-based asynchronous code.


### Using Promises:
- Use the then() method to handle success, and catch() method to handle errors.

### Chaining Promises:
```
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
```

### Error Handling through catch():
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
```
fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
```
### Promise Terminology:
- Promises can be pending, fulfilled, or rejected.
- Resolved promises are either fulfilled or rejected.

### Combining Promises:
Promise.all() combines multiple promises and fulfills when all promises are fulfilled.
Promise.any() fulfills as soon as any promise in the array is fulfilled.

### Async/Await:
- async functions simplify working with asynchronous code.
- await keyword waits for the resolution of a promise inside an async function, making the code look synchronous.