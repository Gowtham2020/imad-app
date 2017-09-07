var express = require('express');
var morgan = require('morgan');
var path =require('patth');

var app=express();
app.use(morgan('combine'));
app.get('/',function(req,res){
    res.sendFile(path.join(_dirname,'ui','index.html'));
});
app.get('/ui/style.css',function(req,res){
    res.sendFile(path.join(_dirname,'ui','style.css'));
});
app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(_dirname,'ui','main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

