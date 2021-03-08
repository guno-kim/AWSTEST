const express=require('express')
const app=express()
const port=5000
app.listen(port,()=>{
    console.log('listening..',port);
})
app.get('/',(req,res)=>{
    console.log(req);
    res.json({messsage:"hellow"})
})