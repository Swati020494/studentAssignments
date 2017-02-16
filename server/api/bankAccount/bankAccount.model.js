require('sequelize');
var BankAccountData=function(connection,Sequelize){
				var BankAccount=connection.define('bankaccount',{
			id: {
		        allowNull: false,
		        autoIncrement: true,
		        primaryKey: true,
		        type: Sequelize.INTEGER,
		      },
		        accountNo: {
		        allowNull: false,
		        unique: true,
		        type: Sequelize.BIGINT,
		      },
		      pwd: {
		        allowNull: false,
		        type: Sequelize.STRING,
		      },
		      typeofAccount: {
		        type: Sequelize.ENUM('Savings', 'Current','Salary'),
		        allowNull: false,
		      },
		      dateOfCreation: {
		        type: Sequelize.DATE,
		        allowNull: false,
		      }
		      
		});
		//connection.sync({force:true});
		return BankAccount;
}
module.exports=BankAccountData;