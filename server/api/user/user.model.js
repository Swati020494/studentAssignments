var UserData=function(connection,Sequelize){
				console.log('model files');
				var user= connection.define('user',{
					//id,pwd,name,age,gender,adress,phone
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
		      gender: {
		      type: Sequelize.ENUM,
		      values: ['Male','Others', 'Female']
		       },
		      adress: {
		        type: Sequelize.ARRAY(Sequelize.TEXT),
		        allowNull: false,
		      },
		      phone:{
		        type: Sequelize.ARRAY(Sequelize.BIGINT),
		        allowNull: false,
		      }
		},
		{
       		 classMethods: {
                insert: function(data) {
                	console.log(data);
               	 this.create({
							pwd :data.pwd ,
							name :data.name ,
							age :data.age ,
							gender :data.gender ,
							adress :data.adress ,
							phone :data.phone 
						}).then(function(user) {
							console.log(user);
					});

               	 }
       		 	}
		      
		});
		return user;
}
module.exports=UserData;