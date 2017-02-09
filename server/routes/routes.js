var path= require("path");
var controller=require('./../controller/controller')
exports.init=function(app){
app.get('/data',controller.getData);
app.get('/',function(request,response){
		response.sendFile(path.resolve(__dirname + '/../../client/index.html'));
	});
}	