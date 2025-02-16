const fs = require('fs');

fs.appendFile("./file.txt"," this content is appended",(err)=>{if(err){console.log(err);}});
fs.readFile("./file.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log("the file doesn't exist");
    }
    else{
        console.log(data);
    }
});