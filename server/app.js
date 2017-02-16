var express=require('express');
var app=express();
var getport=require('./config');
require("./config/express")(app);
var route=require("./routes/routes");
var database=require('./sqlDb');
database();
route.init(app);
app.listen(getport.port);