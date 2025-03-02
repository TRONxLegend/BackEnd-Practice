const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.send('<h1>hello ji</h1>')  
})
app.get('/contact',(req,res)=>{
    res.send('<h1>Contact clicked</h1>')  
})
app.get('/file',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))  
})

app.get('/jsonexample',(req,res)=>{
    res.json([
        {
          firstname:'Ayush',
          lastname:'Singh'
        }
    ])
})

app.listen(3000,()=>{
    console.log("server is running");
})