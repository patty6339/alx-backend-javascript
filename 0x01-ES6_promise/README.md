This repo contains files for the ES promise task

### Promises in JavaScript

**What:**  
A **Promise** in JavaScript represents a value that will be available in the future. It is used for handling asynchronous operations, like fetching data from an API, without blocking the rest of the code.

**Why:**  
Promises allow you to manage asynchronous operations more efficiently by avoiding **callback hell** and improving code readability and structure.

**How:**  
A Promise has three possible states:
- **Pending:** The initial state, neither fulfilled nor rejected.
- **Resolved (Fulfilled):** Operation completed successfully, returning a value.
- **Rejected:** Operation failed, returning an error.

### Using `then`, `resolve`, and `catch`

- **`then()`**: Attaches a callback for when the promise is **resolved**.
- **`catch()`**: Attaches a callback for when the promise is **rejected**.
- **`resolve()`**: Manually resolves a promise (used inside a promise function).

```js
const promise = new Promise((resolve, reject) => {
  // Simulate asynchronous operation
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise
  .then(result => console.log(result)) // Output: Success!
  .catch(error => console.error(error)); // Runs if rejected
```

### Promise Object Methods

- **`Promise.all()`**: Waits for all promises in an array to resolve or rejects if any fail.
- **`Promise.race()`**: Resolves or rejects as soon as any of the promises in an array do.
- **`Promise.any()`**: Resolves as soon as any of the promises resolves (ignores rejections).
- **`Promise.allSettled()`**: Resolves when all promises settle (either resolved or rejected).

```js
const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 20));
const promise3 = Promise.reject("Error");

Promise.all([promise1, promise2])
  .then(results => console.log(results)) // Output: [10, 20]
  .catch(error => console.log(error)); // Skips since no rejection

Promise.race([promise1, promise2])
  .then(result => console.log(result)); // Output: 10
```

### Throw / Try

- **`try`**: Allows you to test a block of code for errors.
- **`throw`**: Manually throw an error to be caught.
- **`catch`**: Handles errors that occur in the `try` block.

```js
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message); // Output: Something went wrong
}
```

### The `await` Operator

- **`await`**: Pauses the execution of an async function until the promise resolves. It can only be used inside an **async** function.

```js
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
```

### How to Use an `async` Function

- **`async`**: Declares a function that returns a Promise. Inside it, you can use `await` to wait for a promise to resolve.
  
```js
async function myFunction() {
  try {
    const result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

myFunction();
```

In summary, **Promises** are essential for managing asynchronous operations, `then` and `catch` handle their resolution and rejection, and **async/await** simplifies working with Promises in a more readable, synchronous-like style.
