var Sequelize=require('sequelize');
var database=function(){
	var connection=new Sequelize('postdata','postgres','database',{
			dialect:'postgres'
			});
	var User=require('./../api/user/user.model');
	var BankAccount=require('./../api/bankAccount/bankAccount.model');
	var user=User(connection,Sequelize);
	var bankAccount=BankAccount(connection,Sequelize);
	user.hasMany(bankAccount);
	bankAccount.belongsTo(user);
	connection.sync({force:true});
}
module.exports=database;
