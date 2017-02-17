var Sequelize=require('sequelize');
var connection=new Sequelize('postdata','postgres','database',{
			dialect:'postgres'
			});
var database={
	Sequelize:Sequelize,
	connection:connection
};
module.exports=database;