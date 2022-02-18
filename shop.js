const express=require('express')
const router=express.Router()
router.get('/show',(req,res,next)=>{
    res.send("<h1>ended here</h1>")
    
})
module.exports=router