var express= require('express');
var bodyParser= require('body-parser');
var path = require('path');
var init=function(app){
	// app.use(express.static(public));
	app.use(bodyParser.urlencoded());
	app.use(bodyParser.json());
}
module.exports=init