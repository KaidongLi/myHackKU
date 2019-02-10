var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var date = new Date();

var path=process.cwd();

app.use(bodyParser.json());
app.use(express.static("views/public"));

app.get('/',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/start.html');
})

app.get('/goHome',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/public/home.html');
})

app.get('/login',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/loginPage.html');
})

app.get('/entry',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/start.html');
})

app.get('/search',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/search.html');
})

app.get('/searchSuccess',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/resultPage.html');
})

http.listen(8080, function(){
  console.log('listening on :' + 8080);
})