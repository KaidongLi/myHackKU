var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var date = new Date();

app.use(bodyParser.json());

app.get('/',function(req,res){
    console.log(req.url);
    res.send('server on');
    res.end();
})

http.listen(8080, function(){
  console.log('listening on :' + 8080);
});
