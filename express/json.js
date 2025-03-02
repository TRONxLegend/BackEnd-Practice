const express = require('express')
const app = express();
const phones = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href ="/api/phones">Phones</a>')
})

app.get('/api/phones',(req,res)=>{
    res.json(phones);
})

app.listen(2000,()=>{
    console.log("server is running at port 2000....")
})