var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var date = new Date();

var path=process.cwd();

app.use(bodyParser.json());
app.use(express.static("views"));

app.get('/',function(req,res){
    console.log(req.url);
    console.log("hahahha");
    res.sendFile(path+'/views/loginPage.html');
})

app.get('/home',function(req,res){
    console.log(req.url);
    console.log("home");
    res.sendFile('/views/index.html', {root: __dirname });
})

app.get('/entry',function(req,res){
    console.log(req.url);
    console.log("hahahha");
    res.sendFile('/views/main.html', {root: __dirname });

app.get('/search',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/search.html');
})

http.listen(8080, function(){
  console.log('listening on :' + 8080);
});
