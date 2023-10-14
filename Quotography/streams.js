const fs=require('fs');
const readStream = fs.createReadStream('./docs/blog.txt');
const writeStream = fs.createWriteStream('./docs/blog2.txt');
//readStream.on('data',(chunk)=>{
  //  console.log(chunk.toString());
   // writeStream.write(chunk);
//})
//Instead of doing like above, we can use piping concept
readStream.pipe(writeStream);
