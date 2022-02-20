const rootdir=require("../util/path")
const path=require('path')
exports.conatctuspage=(req,res,next)=>{
    res.sendFile(path.join(rootdir,"views","contactus.html"))

}
exports.successpage=(req,res,next)=>{
    res.sendFile(path.join(rootdir,"views","formsucces.html"))
}