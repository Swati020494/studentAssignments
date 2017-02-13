var express=require('express')
var app=express();
var getport=require('./config');
var pg=require('pg');
const client = new pg.Client({user: 'postgres', database :'test' , password : 'database'});
client.connect(function(err){
	if(err)	throw err ;
	client.query('create table if not exists student(id integer primary key , name varchar(20), section char)',function(err,result){
		if(err) throw err ; 
		
	});
	//DELETE FROM STUDENT WHERE WHERE ID = '6;

	client.query("DELETE FROM STUDENT  WHERE ID = 6",function(err,result){
		if(err) throw err ; 
		
	});
	var query = client.query("SELECT * FROM student WHERE section = 'A';", function(err,result){
		if(err) throw err ; 
		console.log(result);
		var len = result.length; 
		console.log(result.rows);
		client.end(function(err){
			if(err) throw err ; 
		});
	});
});
app.listen(getport.port);