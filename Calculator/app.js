// var Calc  = require('./calc.js');
var express  = require("express");
// console.log(Calc.prod(10,20))

var app = express();
app.listen(8000);

app.get("/",function(req,res){
express.readFile('index.html',function(srr,data){
    res.write(data);
    res.end();
  })
    // res.send("index page");
});
app.get("/about",function(req,res){
    console.log(req.body);
    res.send("about page");
});