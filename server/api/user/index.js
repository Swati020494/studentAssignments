var Sequelize=require('sequelize');
var UserData=function(connection,Sequelize){
				var User=connection.define('user',{
			id: {
		        allowNull: false,
		        autoIncrement: true,
		        primaryKey: true,
		        type: Sequelize.INTEGER,
		      },
		      pwd: {
		        allowNull: false,
		        type: Sequelize.STRING,
		      },
		      name: {
		      	allowNull: false,
		        type: Sequelize.STRING,
		      },
		      age: {
		      	allowNull: false,
		        type: Sequelize.INTEGER,
		      },
		      // gender: {
		      //   type: Sequelize.ENUM,
		      //   values: ['Male','Others', 'Female']
		      // },
		      adress: {
		        type: Sequelize.ARRAY(Sequelize.TEXT),
		        allowNull: false,
		      },
		      phone:{
		        type: Sequelize.ARRAY(Sequelize.BIGINT),
		        allowNull: false,
		      },
		});
		connection.sync();
}
module.exports=UserData;