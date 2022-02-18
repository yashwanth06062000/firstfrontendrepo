const { Console } = require('console')
const express=require('express')
const router=express.Router()
const fss=require('fs')
const { message } = require('statuses')
router.get("/login",(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input type="text" id="username" name="username"><button type="submit">Login</button></from>')
})
router.post("/",(req,res,next)=>{
    res.send('<form action="/addingpage" method="POST"><input type="text" name="username"  value="yashwanth"><input type="text" id="message" name="message"><button type="submit">sendMsg</button></from>')
})
router.post("/addingpage",(req,res,next)=>{
    
    fss.appendFileSync("answer.txt",`${req.body.message}:${req.body.username}`,(err)=>{
        Console.log(err)
    })
    res.send("<h1>successfuly added</h1>")
  
    //fs.writeFilSync("mesage.txt",`${localStorage.getItem(`username`):document.getElementById("message")`}) 
  //console.log(req.body.message,localStorage.getItem(`username`))

})
router.post("/done")
module.exports=router

