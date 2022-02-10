const http=require('http')
const sever=http.createServer((req,res)=>{
    if(req.url==='/'){
    res.write('<html>')
    res.write('<body>')
    res.write('<form method="POST" action="/message"><input type="text" name="message"><button type="submit">send</button></form>' )
    res.write('</body>')
    res.write('</html>')
    return res.end()

    }
    if(req.url==='/home'){
        res.write('<html>')
        res.write('<body>')
        res.write(`<h1>welcome home</h1>`)
        res.write('</body>')
        res.write('</html>')
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
