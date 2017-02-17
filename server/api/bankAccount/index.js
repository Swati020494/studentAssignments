var express=require('express');
var router=express.Router();
var controller=require('./bankAccount.controller');
router.post('/',controller);

//router.get('/search',controller.select);

// router.post('/insert',function(req,res){
// res.send({id:1});
// });
module.exports=router;