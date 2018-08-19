let http= require('http');
let port = process.argv[2];
let map = require('through2-map');

let server = http.createServer((req,res)=>{
    if(req.method=='POST'){
        req.pipe(map((chunk)=>{
            return chunk.toString().toUpperCase()
        })).pipe(res);
    }
});

server.listen(port);

