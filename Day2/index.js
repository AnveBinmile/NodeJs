const fs = require("node:fs");


// Reading File
console.log("First");
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

console.log("Second");
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("Third");



// Writing File

// console.log('Write');
// fs.writeFileSync("./file.txt"," Anvesha this side");


// WATCHING A FILE

// fs.watchFile("./file.txt",(error, data) => {
//     console.log(data);
// })

// setInterval(()=>{
//      fs.appendFile('./file.txt','\n anvesha is super e  because she baught me an icecream worth 0.8$ ',(data)=>{
//      });
// },1000);




