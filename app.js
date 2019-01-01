var express = require('express');
var app = module.exports = express();

var logincontroller = require('./controller/logincontroller');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engin', 'ejs');
app.engin('html', require('ejs').renderFile);

app.get('/login', function(req, res){
    res.render('login.html')
})

app.post('/loginprocess', function(req, res){
    var req_mem_id = req.body.id;
    var req_mem_pw = req.body.pw;

    controller.login(req, req_mem_id, req_mem_pw, function(result){
        res.json()
    })
})