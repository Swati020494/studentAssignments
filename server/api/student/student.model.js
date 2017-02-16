var pg=require('pg');
var modeldata={
	getData:function(localUrl, cb){
			const client = new pg.Client({user: 'postgres', database :'test' , password : 'database'});
			var res;
			client.connect(function(err){
			if(err)	throw err ;
			client.query("SELECT * FROM student WHERE id = $1;",[localUrl], function(err,result){
				if(err) throw err ; 
				cb(result);
				client.end(function(err){
				if(err) throw err ; 
				});
			});
		});
	},
	insertData:function(data, cb){
			const client = new pg.Client({user: 'postgres', database :'test' , password : 'database'});
			var res;
			client.connect(function(err){
			if(err)	throw err ;

			client.query("insert into student values($1,$2,$3);",[data.id, data.name , data.section], function(err,result){
				if(err) throw err ; 
				cb(result);
				client.end(function(err){
					if(err) throw err ; 
				});
			});
		});
	}
}
module.exports = modeldata ;