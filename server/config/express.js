var express= require('express');
var path = require('path');
var public= path.resolve(__dirname + '/../../client/public');
var init=function(app){
	app.use(express.static(public))
}
module.exports=init