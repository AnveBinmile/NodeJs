const express = require('express');
const app = express();
const cron = require('cron');


app.listen(3000,()=>{
    console.log('listening on 3000');
})