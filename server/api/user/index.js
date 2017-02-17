var express=require('express');
var router=express.Router();
var controller=require('./user.controller');
console.log('inside index');
router.post('/',controller.insert);
module.exports=router;