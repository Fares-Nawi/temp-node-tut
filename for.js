

var data = {
"myfun":function display(){
	console.log(this==data);
	}
}
data.myfun();
