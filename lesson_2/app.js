var express = require('express');
var utility = require('utility');
const app = express();
app.get('/', function(req, res){
    var q = req.query.q;
    var md5Value = utility.md5(q);
    res.send(md5Value);
});

app.listen(5000, function(req, rs){
    console.log('app is running at post 5000');
});

//d41d8cd98f00b204e9800998ecf8427e

//b3be9d0a0747f09c4bb18840003e3f9a