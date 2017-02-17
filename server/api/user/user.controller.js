var model=require('./user.model');
var obj = {
	success : true, 
	msg :"",
	data : ""
}
//id,pwd,name,age,gender,adress,phone
var data={
	insert:function(request,response){
		var database=require('./../../config/dbConn');
		var pwd = request.body.pwd ;
		var name = request.body.name ;
		var age = request.body.age ;
		var gender = request.body.gender ;
		var adress = request.body.adress ;
		var phone = request.body.phone ;


		var ins = {
					"pwd":pwd,
					"name":name,
					"age":age,
					"gender":gender,
					"adress":adress,
					"phone":phone
					 };
					 console.log(ins);
		//del.insertData(data , function(result){
			//console.log("model",model());

			model(database.connection,database.Sequelize).insert(ins);
		}
	}
	
module.exports = data ;