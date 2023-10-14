const http=require('http');
const fs=require('fs');
//to create server
const server=http.createServer((req,res)=>{
   /* sending response to the browser via res.write
   res.setHeader('Content-type','text/plain');
   res.write('heloo mapla'); res.end();*/

 //sending response as html file
res.setHeader('Content-type','text/html');
fs.readFile('./views/index.html',(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        res.write(data);
        //can also use res.end(data)
        res.end();
    }
})
  
});

server.listen(3000,'localhost',()=>{
    console.log("Listening on port");
})