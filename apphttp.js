const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome to home page")
    }

    if(req.url === '/about'){
        res.end("about our company")
    }
    res.end(`
    <h1>Oops</h1>
    <p>we can not find the page that you looking for</p>
    <a href="/">back home</a>
    `)
    
})

server.listen(5000);