var http = require('http');
var url=require('url');
//var MongoClient = require('mongodb').MongoClient;
var url1="example.com";
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<center><h1>this is manirethinam</h1></center>');

    res.end();
}).listen(8080); 