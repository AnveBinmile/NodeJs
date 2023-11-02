const fs= require('fs');
const pdfParser = require('pdf-parse');

let dataBuffer = fs.readFileSync('./sample.pdf');

pdfParser(dataBuffer).then(function(data){
    const allWords = data.text.split(' ');
    const arr = allWords.filter((item)=>item==='And');
    const cnt = arr.length;
    console.log('Count ',cnt);
    fs.writeFileSync('./outputCount.txt', `Count is : ${cnt}`);
})