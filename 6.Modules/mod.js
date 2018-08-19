let fs = require('fs');
let path = require('path');

module.exports = function(dir,ext,callback){
    let arr = [];
    fs.readdir(dir,function(err,files){
        if(err)
            return callback(err);
        for(let file of files){
            if(path.extname(file)=="."+ext){
                arr.push(file);
            }
        }
        return callback(null,arr);
    });
}
