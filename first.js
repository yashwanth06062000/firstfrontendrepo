const express=require('express')
const chatapp=express();
const bodyparser=require('body-parser')
const loginp=require('./log.js')
chatapp.use(bodyparser.urlencoded({extended:false}))
chatapp.use(loginp)
chatapp.listen(3000)
