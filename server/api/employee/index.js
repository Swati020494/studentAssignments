var Sequelize=require('sequelize');
var data=function(){
		var connection=new Sequelize('test','postgres','database',{
			dialect:'postgres'
			});
		var Employee=connection.define('employee',{
			id: {
		        allowNull: false,
		        autoIncrement: true,
		        primaryKey: true,
		        type: Sequelize.INTEGER,
		      },
		      name: {
		        type: Sequelize.STRING,
		        allowNull: false,
		      }
		});
		connection.sync();
}
module.exports=data;