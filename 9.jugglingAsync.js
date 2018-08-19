let http = require('http');

let urls = [process.argv[2],process.argv[3],process.argv[4]];

let content = [];

let count = 0;

function httpGet(url,iterator){

    http.get(url,(res)=>{
        let result = "";
        res.setEncoding('utf8');
        res.on("data",(chunk)=>{
            result += chunk;
        });
        res.on("end",()=>{
           content[iterator] = result;
           if(count==2){
               dataOutput();
           }
           count++;
        });
    });
}

for(let index in urls){
    httpGet(urls[index], index);
}

function dataOutput(){
    for(let data of content){
        console.log(data);
    }
}