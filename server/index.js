var express = require('express');
var app = express();
var todoRoutes = require('./routes/todos');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile("index.html")
});

app.use('/api/todos',todoRoutes);

app.listen(PORT, function(){
    console.log("app is running on "+ PORT);
});