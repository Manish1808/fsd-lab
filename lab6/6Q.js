const fs = require('fs');
fs.writeFileSync("./file.txt","This is about file module");
fs.readFile("./file.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log("the file doesn't exist");
    }
    else{
        console.log(data);
    }
});