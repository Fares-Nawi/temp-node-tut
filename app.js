// blocking
/*var fs=require("fs");

var data=fs.readFileSync("info.txt");

console.log(data.toString());*/

///call back

/*var fs=require("fs");

fs.readFile("info.txt",function(err,data){
	
    if(err) return console.error(err);
    else return console.log(data.toString());	
	
	});*/
	
/*var http=require("http");
  var info={
	  "name" : "alex",  
	  "age" : 24
	  }

var myhttp=http.createServer(function (request,response){
	response.writeHead(200);
	response.write(JSON.stringify(info));
	response.end();
	
	});
	
myhttp.listen(8888);

console.log("we listen to http://127.0.0.1:8888/")	*/	



var http=require('http');
var url=require('url');
var myhttp=http.createServer(function (request,response){
var querystring=url.parse(request.url,true).query;
   
   console.log(querystring);
});
	
myhttp.listen(8888);

console.log('we listen to http://127.0.0.1:8888?id=1&name=hello&kdsjj=hello&kjdsk=hello/')
