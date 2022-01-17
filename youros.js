const os=require('os');
const currentOS={
  name:os.type(),
  release:os.release(),
  Totalmem:os.totalmem(),
  Freemem:os.freemem()
}


console.log(`Download for ${currentOS.name}`);


////------------------------
console.log(`your pc is open since ${os.uptime/60} minutes`);

