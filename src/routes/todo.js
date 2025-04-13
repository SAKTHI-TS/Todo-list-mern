const express=require('express');
const schema=require('../models/todo');
const router=express.Router();

router.get('/home',(req,res)=>{
    res.send("send request to clients");
})

router.post('/', async(req,res)=>{
    console.log(req.body);
    res.send({message:"Not implemented"});
})


module.exports=router;