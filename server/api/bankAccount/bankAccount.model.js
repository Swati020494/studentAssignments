require('sequelize');
var BankAccountData=function(connection,Sequelize){
			return connection.define('bankaccount',{
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
		      }},
		      {
       		 classMethods: {
                associate: function(table) {
                var BankAccount = table.bankaccount;
                var User = table.user;

                User.hasMany(BankAccount);
				BankAccount.belongsTo(User);
                }
        }
		      
		});
}
module.exports=BankAccountData;