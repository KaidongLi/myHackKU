var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var date = new Date();

var path=process.cwd();

app.use(bodyParser.json());

app.get('/',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/main.html');
})

app.get('/home',function(req,res){
    console.log(req.url);
    res.sendFile(path+'/views/loginPage.html');
})


http.listen(8080, function(){
  console.log('listening on :' + 8080);
});
