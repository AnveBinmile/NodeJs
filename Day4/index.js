let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done has been executed");

    reject("some issues");
  }, 2000);
});

data
  .then((item) => {
    console.warn("then block ", item);
  })
  .catch((err) => {
    console.log(err, "catch block");
  });

// runs in both resolve and reject situation
data.finally(() => {
  console.log("final block ", item);
});

function watchTutCallbacks(callback, errorCallback) {
  //   return new Promise((resolve, reject) => {
  if (userLeft) {
    errorCallbacks({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "UserWatchingCatMeme",
      message: "WebdevSimplified < Cat",
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

watchTutCallbacks(
  (message) => {
    console.log("Success ", message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

function watchTutPromise(callback, errorCallback) {
  return new Promise((resolve, reject) => {
    if (userLeft) {
        reject({
            name:'User Left',
        })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: "User watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      callback("Thumbs up and Subscribe");
    }
  });
}
