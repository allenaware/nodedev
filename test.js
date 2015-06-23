var redis = require("redis");
var http = require('http');
var url = require("url");
client = redis.createClient(6379,'127.0.0.1',{});
client.auth("allenpasswd", function(){});
client.on("error", function (err) {
    console.log("Error " + err);
});
http.createServer(function (req, res) {
    var params = url.parse(req.url, true).query;
   //validate the parameters and deal with different kinds of request
    client.hset("win", params.guid,params.value,redis.print);
}).listen(8888);
