const fs = require("fs");

fs.mkdirSync("newDir");
console.log("after mkdirSync");


// CREATE 
fs.mkdir("newDir4", (err) => {
  if (err) {
    console.log("mkdir failed");
  } else {
    console.log("mkdir succeeded");
  }
});




// REMOVE 

fs.rmdir("newDir4", (err) => {
  if (err) {
    console.log("rmdir failed");
  } else {
    console.log("rmdir succeeded");
  }
});


fs.rmdirSync('newDir4', (err)=>{
  if(err){
    console.log("rmdir failed");
  }
  else{
    console.log("rmdir succeeded");
  }
})

//RENAME 
fs.rename('newDir', 'newDir2',(err)=>{
  console.log(err);
});

fs.renameSync('newDir2','newDir3');


//MOVE FILE

fs.rename('newDir2', 'newDir2',(err)=>{
  console.log(err);
});  




fs.renameSync('newDir2','newDir3');
