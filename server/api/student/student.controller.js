var model=require('./student.model');
var data = function(request,response){

	var id=request.query.id;
	model(id,function(result){
		console.log("results:",result);
		var len=result.rows.length;
		if(len==0)
			response.send("Entry not found!!");
		else
			response.send(result.rows[0]);
	});
}
module.exports = data ; 