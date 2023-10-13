function asynchronous_operational_method() {
    let first_promise = 
        new Promise((resolve, reject) => resolve("promise1"));
    let second_promise = 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" promise2");
        }, 1000);
    });
    let combined_promise = 
        Promise.all([first_promise, second_promise]);
    return combined_promise;
}
 
async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
}
 
display();