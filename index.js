const express=require('express')
const app=express()
const port=5000
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

app.listen(port,()=>{
    console.log('listening..',port);
})
// app.use(
//     (req,res,next)=>{
//         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//         next()
//     }
// )
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser());
app.use(function(req, res, next) {
    let whitelist=[
        'http://localhost:3000',
        'http://algohelper.s3-website.ap-northeast-2.amazonaws.com'
    ]
    let origin = req.headers.origin;
    if (whitelist.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
app.get('/',
  async (req,res)=>{
      const token='asdasd'
      console.log('token generated : ',token)
      //req.headers['withCredentials']=true
      console.log(req.headers.withCredentials)
      res.cookie('logintoken',token,{
        httpOnly:true
         })
         res.end()
  });