const fs = require("node:fs");

// Reading File

const fileContents = fs.readFileSync("./public/file.txt", "utf-8");
console.log(fileContents);

fs.readFile("./public/file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {


    console.log(data);
  }
});


//Writing File
fs.writeFileSync("./public/output.txt", "Anvesha Karn");

const path = "./public/output.txt";
let data = "\nNode Js Training";
fs.writeFile(path,data,(err)=>{
  if(err){
    console.log(err.message);
  }
  else{
    console.log(data);
  }
})


//AppendFile
fs.appendFileSync("./public/file.txt", "\nNode Js is a runtime environment");

data = "\nNode JS is built upon v8 engine";
fs.appendFile(path,data, (data, err) => {
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
});


// WATCHING A FILE

// fs.watchFile("./public/file.txt",(error, data) => {
//     console.log(data);
// })

// setInterval(()=>{
//      fs.appendFile('./public/file.txt','\n anvesha is super e  because she baught me an icecream worth 0.8$ ',(data)=>{
//      });
// },1000);


//Unlink FIle

fs.unlinkSync('./public/file.txt');

fs.unlink('./public/file.txt',(err)=>{
  console.log(err);
});
