let fs = require('fs');

let http = require('http');

let port = process.argv[2];

let file = process.argv[3];

let server = http.createServer((req,res)=>{
    let src = fs.createReadStream(file);
    src.pipe(res);
});

server.listen(port);

// var http = require('http')
//     var fs = require('fs')

//     var server = http.createServer(function (req, res) {
//       res.writeHead(200, { 'content-type': 'text/plain' })

//       fs.createReadStream(process.argv[3]).pipe(res)????????????
//     })

//     server.listen(Number(process.argv[2]))