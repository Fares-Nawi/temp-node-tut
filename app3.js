const os=require("os");
// info about the current user 
const user=os.userInfo();
console.log(user);


//info about the system uptime in second

console.log(`system UpTime is ${os.uptime()} seconds`);

const currentOS={
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()

}
console.log(currentOS);