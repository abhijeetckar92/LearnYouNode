let port = process.argv[2];

let net = require('net');

let d = new Date();

let year = d.getFullYear();

let month = d.getMonth()+1;
if(month<10) {month = "0"+month};

let day = d.getDate();
if(day<10) {day = "0"+day};

let hour = d.getHours();
if(hour<10) {hour = "0"+hour};

let minute = d.getMinutes();
if(minute<10) {minute = "0"+minute};

let date = year+"-"+month+"-"+day+" "+hour+":"+minute+"\n";

let server = net.createServer((socket)=>{
    socket.end(date);
});

server.listen(port);

// var net = require('net')

//     function zeroFill (i) {
//       return (i < 10 ? '0' : '') + i
//     }

//     function now () {
//       var d = new Date()
//       return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
//     }

//     var server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })

//     server.listen(Number(process.argv[2]))