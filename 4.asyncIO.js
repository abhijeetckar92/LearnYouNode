var fs = require('fs');

let buf = fs.readFile(process.argv[2],function(err,data){
    return console.log(data.toString().split('\n').length-1);
});

//let str = ;

//let arr = ;