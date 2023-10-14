const fs=require('fs');
//read files
fs.readFile('./docs/blog.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
//write files
fs.writeFile('./docs/blog.txt','Helloo potato',()=>{
   
    console.log("Completed");
});
//It creates a new file with content Vartaaaaa
fs.writeFile('./docs/blog1.txt','Vartaaaaaaaaa',()=>{
   
    console.log("Completed");
});
//To make directory
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("done with directory");
})
}
else{//to remove directory
   fs.rmdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("removed");
   })
}
//to delete files
if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file deleted");
    });
}
else{
    console.log("file not exists");
}