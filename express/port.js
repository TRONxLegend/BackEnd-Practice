const express = require('express');
const app = express();
const path = require('path');

// app.get('/',(req,res)=>{
//    res.sendFile(path.join(__dirname,'Personal-Portfolio','index.html'))
// })

app.use(express.static('Personal-Portfolio'))


app.listen(4000,()=>{
    console.log("Server is Running");
})