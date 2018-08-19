let http = require('http');

let urlPath = process.argv[2];

let result="";

http.get(urlPath,(res)=>{
    res.setEncoding('utf8');
    res.on("data",(chunk)=>{
        result += chunk;
    });
    res.on("end",()=>{
        console.log(result.length);
        console.log(result);
    });
});