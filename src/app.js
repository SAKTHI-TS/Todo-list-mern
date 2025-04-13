const express=require('express');
const app=express();
const todoRouter=require('./routes/todo');
app.use('/todo',todoRouter);
app.use(express.json());


app.listen(3001,()=>{
    console.log("server is running at 3001");
})