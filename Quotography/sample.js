/*const g = (name)=>{
    console.log('hello ',name);
}
g('nandy');
setTimeout(()=>{
    console.log("Timeout");
    clearInterval(int);
},3000);
const int=setInterval(()=>{
    console.log("Interval");
},1000);
console.log(__dirname);
console.log(__filename);*/
const os=require('os');
console.log(os.platform(),os.homedir());