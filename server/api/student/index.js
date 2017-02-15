var express=require('express');
var router=express.Router();
var controller=require('./student.controller');
router.get('/',controller);
module.exports=router;