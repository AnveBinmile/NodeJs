const express = require('express');
const cors = require('cors');



global.app = express();
app.use(cors()); 

// console.log('APP');

// app.get('/',()=>console.log('Welcome'));
