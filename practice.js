const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
if(req.url="/getdata"){
  fs.readFile("./data.json",'utf-8',(err,data)=>{
    if(err==null){
      res.end(data);
    }else{
      res.end("some error")
    }
  })
}    
  
    
}).listen(8080)
//localhost:8080