const fruitBasket = {
  apple: 27,
  grape: 0,
  pear: 14,
};


// TASKcd
// const getNumFruit = (fruit) => {
//   return fruitBasket[fruit];
// };

// const numApples = getNumFruit("apple");
// console.log(numApples);



// DELAYED EXEC 
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getNumFruit = (fruit) => {
  return sleep(1000).then((v) => fruitBasket[fruit]);
};

getNumFruit("apple").then((num) => console.log(num));

const control = async () => {
  console.log("START");

  const numApple = await getNumFruit("apple");
  console.log(numApple);

  const numGrapes = await getNumFruit("grape");
  console.log(numGrapes);

  const numPears = await getNumPears("pear");
  console.log(numPears);

  console.log("End");
};




const fruitsToGet = ["apple", "grape", "pear"];

// FOR LOOP ASYNC AWAIT

const forLoop = async (_) => {
  console.log("Start");

  for (let index = 0; index < fruitsToGet.length; index++) {
    const fruit = fruitsToGet[index];
    const numFruit = await getNumFruit(fruit);
    console.log(numFruit);
  }

  console.log("End");
};






//FOR EACH => ASYNC AWAIT

const forEachLoop = (_) => {
  console.log("Start");

  fruitsToGet.forEach(async (fruit) => {
    const numFruit = await getNumFruit(fruit);
    console.log(numFruit);
  });

  console.log("End");
};
