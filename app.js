const express=require('express')
const bodyparser=require('body-parser')
const adminroutes=require("./routes/admin.js")
const shoproutes=require("./routes/shop.js")
const path=require('path')

app=express()
//doubt should be asked to yash bhaiya that how body parser work and is it okay to put in admin.js
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminroutes)
app.use(shoproutes)



app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})



app.listen(3000)
