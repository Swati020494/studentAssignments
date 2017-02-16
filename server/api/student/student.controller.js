var model=require('./student.model');
var obj = {
	success : true, 
	msg :"",
	data : ""
}
var data={
	select:  function(request,response){
		var id=request.query.id;
		model.getData(id,function(result){
			var len=result.rows.length;
			if(len==0)
				response.send("Entry not found!!");
			else
				response.send(result.rows[0]);
		});
	},
	insert: function(request,response){
		var id = request.body.id ;
		var name = request.body.name ;
		var section = request.body.section ;
		var data = {"id" :id , 
					"name":name,
					"section":section };
		model.insertData(data , function(result){
			console.log("lll");
			obj.msg = "Successfully updated";	
			console.log(obj.msg);
			// response.send(JSON.stringify(obj));
			response.send(obj);
		});
	}
}
module.exports = data ; 
