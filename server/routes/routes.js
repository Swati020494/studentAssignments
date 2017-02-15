var path= require("path");
exports.init=function(app){
app.get('/',function(request,response){
		response.sendFile(path.resolve(__dirname + '/../../client/index.html'));
	});
app.use('/api/student',require('../api/student'));
}
