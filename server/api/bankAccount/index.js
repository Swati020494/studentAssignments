var Sequelize=require('sequelize');
var BankAccountData=function(connection){
				var BankAccount=connection.define('bankAccount',{
			id: {
		        allowNull: false,
		        autoIncrement: true,
		        primaryKey: true,
		        type: Sequelize.INTEGER,
		      },
		      // userid: {
		      //   allowNull: false,
		      //   type: Sequelize.INTEGER,
		      // },
		      accountNo: {
		        allowNull: false,
		        //unique: true,
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
		connection.sync();
}
module.exports=BankAccountData;