const path=require("path");

console.log(path.sep);


const filepath =path.join("/content","subcontent","test.txt");

console.log(filepath);

const base =path.basename(filepath);

console.log(base);

//const absolute=path.join(__dirname,"/content","subcontent","test.txt");   this gives the same result
const absolute=path.resolve(__dirname,"content","subcontent","test.txt");
console.log(absolute);

/*const {readFileSync,writeFileSync, read}= require('fs');
///--------------------------------------------------  work with file system

const first=readFileSync("./content/text1.txt","utf8");
const second=readFileSync("./content/subcontent/test.txt","utf8");
console.log(first,second);



writeFileSync("./content/fileCreatedByCode.txt",`here is the content of the first file :  ${first} 
\n and here is the content of the second file : ${second} `,{ flag: 'a'});*/



///----------------------------------



const {readFile,writeFile}=require('fs');


readFile('./content/text1.txt',"utf8",(err,result)=>{
if(err){
    console.log(err);
    return ;
}
const first=result;
readFile('./content/subcontent/test.txt',"utf8",(err,result)=>{
    if(err){
        console.log(err);
        return ;
    }
    const second=result;
    writeFile("./content/async.txt", `here is the content ${first} + ${second}`,(err,result)=>{
   if(err){
       console.log(err);
       return;

   }
   console.log(result);


    })
    });
});




