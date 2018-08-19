let mod = require('./mod.js');

let dir = process.argv[2];

let ext = process.argv[3];


let callback = function(err , data){
    if(err){return err}

    for(let d of data){
        console.log(d);
    }
}

mod(dir,ext,callback); 