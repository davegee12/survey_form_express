var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var survey;
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/result', function(req, res){
    res.render('result', {data:survey});
});

app.post('/form', function(req, res){
    console.log("POST DATA \n\n", req.body);
    survey = req.body;
    res.redirect('/result');
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});