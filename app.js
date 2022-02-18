const express=require('express')
const bodyparser=require('body-parser')
app=express()
app.use(bodyparser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
   
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">ADDproduct</button></form>')
})
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
    
    
})



app.use('/',(req,res,next)=>{
    console.log("i am middleware 1")
    res.send("<h1>ended here</h1>")
    
})


app.listen(3000)
