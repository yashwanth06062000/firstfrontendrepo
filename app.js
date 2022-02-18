const express=require('express')
const bodyparser=require('body-parser')
const adminroutes=require("./routes/admin.js")
const shoproutes=require("./routes/shop.js")

app=express()
//doubt should be asked to yash bhaiya that how body parser work and is it okay to put in admin.js
app.use(bodyparser.urlencoded({extended:false}))
app.use('/admin',adminroutes)
app.use('/shop',shoproutes)



app.use((req,res,next)=>{
    res.status(404).send("<h1>page not found</h1>")
})



app.listen(3000)
