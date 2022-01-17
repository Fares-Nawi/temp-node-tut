console.log(__dirname);
/*setInterval(()=>{
console.log("hello world");
},1000)*/


const names=require("./names");
const sayhi=require("./log");
sayhi('alex');
sayhi(names.name1);
sayhi(names.name2);


