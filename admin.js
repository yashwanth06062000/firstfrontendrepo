const user=require('../Models/appointment')
exports.adduser=(req,res,next)=>{
    user.create({
        name:req.body.name,
        email:req.body.email,
        phoneno:req.body.no
    }

    ).then(()=>{
        console.log("user added successfully")
    }).catch(err=>console.log(err))
    
}

