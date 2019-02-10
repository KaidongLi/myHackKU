var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var date = new Date();

var path=process.cwd();

app.use(bodyParser.json());
app.use(express.static("views/public"));

app.get('/goHome',function(req,res){
    console.log(req.url);
    console.log("home");
    res.sendFile(path+'/views/public/index.html');
})

app.get('/login',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/loginPage.html');
})

app.get('/entry',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/main.html');
})

app.get('/search',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/search.html');
})

http.listen(8080, function(){
  console.log('listening on :' + 8080);
})