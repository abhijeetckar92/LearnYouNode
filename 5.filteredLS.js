let fs = require('fs');
let path = require('path');

let dir = process.argv[2];

let ext = process.argv[3];

fs.readdir(dir,function(err,files){
    if(err)
        return err;
    for(let file of files){
        if(path.extname(file)=="."+ext){
            console.log(file);
        }
    }
});