var pg=require('pg');
exports.getData=function(req,response){
	var localUrl=req.query.id;
	console.log(localUrl);
	const client = new pg.Client({user: 'postgres', database :'test' , password : 'database'});
	client.connect(function(err){
	if(err)	throw err ;

	
		client.query("SELECT * FROM student WHERE id = $1;",[localUrl], function(err,result){
		if(err) throw err ; 
		console.log("results:"+result);
		console.log(typeof(result));
		// console.log(result.rows[0].name);
		var len=result.rows.length;
		console.log(len);
		if(len==0)
			response.send("Entry not found!!");

		for(var i in result.rows)
		{
			if(result.rows[i].id==localUrl)
				{
					response.send(result.rows[i]);
				}
		}
		client.end(function(err){
			if(err) throw err ; 
			});
		});
	});
	}
