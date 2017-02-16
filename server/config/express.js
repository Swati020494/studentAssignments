var express= require('express');
var bodyParser= require('body-parser');

var path = require('path');
var public= path.resolve(__dirname + '/../../client/public');
var init=function(app){
	app.use(express.static(public));
	app.use(bodyParser.urlencoded({ extended: false}));
	app.use(bodyParser.json());
}

module.exports=init