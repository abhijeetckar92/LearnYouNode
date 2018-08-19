let http = require('http');

let urlPath = process.argv[2];

http.get(urlPath,(res)=>{
    res.setEncoding('utf8');
    res.on("data",(chunk)=>{
        console.log(chunk);
    })
});

// var http = require('http')

//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     }).on('error', console.error)