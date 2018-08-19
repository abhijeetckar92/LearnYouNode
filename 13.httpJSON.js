const http = require('http');
const url = require('url');

let server = http.createServer((req,res)=>{
    if(req.method == 'GET'){
        let parsedURL = url.parse(req.url,true);
        let path = parsedURL.path;
        let date = new Date(parsedURL.query.iso);
        if(path.indexOf("parsetime")>=0){
            let result = {
                hour:   date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
            res.end(JSON.stringify(result));
        }
        if(path.indexOf("unixtime")>=0){
            let result = {'unixtime':date.getTime()}
            res.end(JSON.stringify(result))
        }
    }

});

server.listen(process.argv[2]);


// var http = require('http')
//     var url = require('url')

//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }

//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }

//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result

//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }

//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))
