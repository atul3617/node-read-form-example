const http=require('http')
const fs=require('fs/promises')

const PORT=5000;
http.createServer(async (req,res)=>{
    if(req.method==='POST'){
        if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
            let body=""
            // read data from form
            req.on("data",(chunk)=>{
                body +=chunk
            })
    //   end req,res cycle
    req.on("end",()=>{
        res.end(body)
    })
        }
    }
    else{
        if(req.url==="/home" || req.url==="/"){
            res.writeHead(200,"ok",{"content-type":"text/html"})
            let html=await fs.readFile('./index.html',"utf-8")
            res.end(html)
        }
        else{
            res.writeHead(400,"error",{"content-type":"text/plain"})
            res.end("page in found")
        }
    }

}).listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})