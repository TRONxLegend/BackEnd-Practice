// const os = require('os');
// const a = os.freemem();
// console.log(a);
// const b = os.totalmem();
// console.log(b);
// const c = os.hostname();
// console.log(c);
  

// // Path:
// const path = require('path');
// console.log(__filename);

// console.log(path.basename(__filename)); // index.js

// console.log(path.extname(__filename)); // js

// console.log(path.basename(__dirname));

// console.log(path.join('/hello','/hello','file.txt'));

// console.log(path.parse(__filename)); //full root, dir, base,ext,name.

// console.log(path.join(__dirname, 'test', 'hello.html'));// full path as well as the html file path



// # FS MODULE :-

const fs = require('fs');
fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return ;
    }
    else{
        console.log(data);
    }
})

fs.writeFile('file2.txt','Hello World',(err)=>{
    if(err){
        console.log(err);
        return ;
    }
    else{
        console.log('File Created');
    }
})