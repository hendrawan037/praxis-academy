var http = require('http');
var op = require('./module');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('</h3>' + op.title + '</h3>');
    res.write('<br/><br/>');
    res.write('12 + 30 = ' + op.tambah(12,30));
    res.write('<br/>');
    res.write('4 * 5 = ' + op.kali(4,5));
    res.end();
}).listen(8080);