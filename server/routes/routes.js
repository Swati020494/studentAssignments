var path= require("path");
exports.init=function(app){
app.use('/api/user',require('./../api/user'));
//app.use('/api/bankAccount',require('../api/bankAccount'));

}