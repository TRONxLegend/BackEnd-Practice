const express = require('express');
const app = express();

  
app.use(express.json())

let books = [
    { id: 1, name: "Book 1" , author: "Author1"},
    { id: 2, name: "Book 2", author: "Author2" },
    { id: 3, name: "Book 3" , author: "Author3" },
];

app.get('/', (req,res)=>{   /* fpr Get Request */
    res.json(books);
   
})


// create 

app.post('/books',(req,res)=>{
  console.log(req.body);
  const newbooks = req.body;
  newbooks.id = books.length + 1;
  books.push(newbooks);
  res.status(200).json(books);
})


// update
app.put('/books',(req,res)=>{
    const id = parseInt(req.params.id);
    const rbook = req.body;
  const index = books.findIndex((book)=>book.id === id);
if(index !== -1){
    books[index] = {...books[index],...rbook};
    res.json(books[index]);
}

else{
    res.status(404).json({message:"Book not found"});
}

})

app.delete('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = books.findIndex((book)=>book.id === id);
    if(index !== -1){
        books.splice(index,1);
        res.json(books);
    }
    else{
        res.status(404).json({message:"Book not found"});
    }
    
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})