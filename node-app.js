const http=require('http')
const fs=require('fs')
const sever=http.createServer((req,res)=>{
    if(req.url==='/'){
       
            return fs.readFile('messagefroform.txt', 'utf8' ,(err,data)=>{
                
                // console.log(dat[1])
        
                
                res.write('<html>')
                res.write('<body>')

                    const dat=data.split(",")
                for(let i=0;i<dat.length;i++){
                res.write(`<h1>${dat[i]}</h1>`)}
                res.write('<form method="POST" action="/message"><input type="text" name="message"><button type="submit">send</button></form>' )
                res.write('</body>')
                res.write('</html>')
                
                    
        
                return res.end()
            })    
    

    }
    if(req.url==='/message' && req.method==='POST'){
        const body=[]
        req.on('data',(c)=>{
            body.push(c)
        })
        req.on('end',()=>{
            const pb=Buffer.concat(body).toString()
            const out=pb.split('=')[1]
            fs.appendFileSync('message.txt',out)
        })
        
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end()
    
    }
    else if(req.url==='/about'){
        res.write('<html>')
        res.write('<body>')
        res.write(`<h1>welcome to about us page</h1>`)
        res.write('</body>')
        res.write('</html>')
        return res.end()
    
    }
    else if(req.url==='/node'){
        res.write('<html>')
        res.write('<body>')
        res.write(`<h1>welcome to my node js project</h1>`)
        res.write('</body>')
        res.write('</html>')
        res.end()
    
    }
    res.write('<html>')
    res.write('<body>')
    res.write(`<h1>${req.message}</h1>`)
    res.write('</body>')
    res.write('</html>')
    res.end()
})
sever.listen(4000)
