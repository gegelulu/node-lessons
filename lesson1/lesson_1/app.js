const app = require('express')();

app.get('/',function(req, res){
    res.end('hello world')
})
app.listen('5000',function(){
    console.log('app is working on 5000')
})