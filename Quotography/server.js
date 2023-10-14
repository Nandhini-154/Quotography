const http=require('http');
const fs=require('fs');
const _=require('lodash');
const server=http.createServer((req,res)=>{

    console.log(req.url,req.method);
    //lodash package is installed to access the built in functions inside that package
    let n=_.random(0,20);
    console.log(n);
//the func is called only once as we used built in method call once
    const greet =_.once(()=>{
        console.log('Hii');
    })
    greet();
    greet();
    //end of lodash usage
    res.setHeader('Content-type','text/html');
    let path='./views/';
    switch(req.url){
        case '/':
            path +='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path +='about.html';
            res.statusCode=200;
            break;
            //redirecting users
        case '/about-us':
            path+='about.html';
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path +='404.html';
            res.statusCode=404;
            break;
    }
fs.readFile(path, (err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        res.end(data);
    }
});
})
server.listen(3000,'localhost',()=>{
    console.log("Listening on port");
})
