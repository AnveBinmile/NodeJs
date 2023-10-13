const interval = setInterval(function () {
  return console.log("Hello world");
}, 1000);

// var si = null;
var si = setImmediate(function () {
  console.log("A");
  si = setImmediate(function () {
    console.log("A.1");
    setImmediate(function () {
      console.log("A.2");
    });
  });

  setImmediate(function () {
    console.log("B");
    setImmediate(function () {
      console.log("B.1");
      setImmediate(function () {
        console.log("B.2");
      });
    });
  });
});

clearImmediate(si);

setImmediate(function () {
  console.log("X");
  setImmediate(function () {
    console.log("X.1");
    setImmediate(function () {
      console.log("X.2");
    });
  });
});

setTimeout(function A() {
  clearInterval(interval);
}, 5000);





