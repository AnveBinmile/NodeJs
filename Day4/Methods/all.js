const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 is resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 is resolved");
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 is resolved");
  }, 1500);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // ['Promise 1 is resolved', 'Promise 2 is resolved', 'Promise 3 is resolved']
  })
  .catch((error) => {
    console.error(error);
  });
