var path=require('path');
var dbase=require('./../config/dbConn');
require('sequelize');
var db={};
var models = ['user', 'bankAccount'];

var database=function(){
			for(var i in models){
			var model=require('./../api/'+models[i]+'/'+models[i]+'.model');
			var table=model(dbase.connection,dbase.Sequelize);
			db[table.name] = table;
	}
	
		Object.keys(db).forEach(function(tableName) {
		if ('associate' in db[tableName]) {
			db[tableName].associate(db)
		}
		});

	dbase.connection.sync({force:true});
}
module.exports=database;
