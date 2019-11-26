var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

const express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, "htmls"));
app.set('view engine', 'ejs');
app.use(express.static('public')); //Express serves images, CSS files, and JavaScript files in a directory named public
app.use(bodyParser.urlencoded({encoded: true}));

app.get('/', function(req, res){
    res.render('index');
});

http.createServer(app).listen(port, function(){

});
