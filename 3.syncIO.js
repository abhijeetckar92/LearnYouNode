var fs = require('fs');
//let path = process.argv[2];

//let buf = ;

//let str = ;

//let arr = ;

console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length-1);