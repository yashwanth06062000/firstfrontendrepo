const express=require('express')
const path=require('path')
const rootdir=require("../util/path")
const router=express.Router()
const contact=require('../controllers/contact')
router.get('/show',(req,res,next)=>{
    res.sendFile(path.join(rootdir,"views","shop.html"))
    
})
router.get('/contactus',contact.conatctuspage)
router.use('/success',contact.successpage)
module.exports=router