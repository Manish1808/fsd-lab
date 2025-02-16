const os = require('os');

setInterval(()=>{
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const freeMemoryPercentage = (freeMemory/totalMemory)*100;
    console.log(`Used Memory: ${usedMemory} bytes`);
    console.log(`freeMemoryPercentage: ${freeMemoryPercentage}%`);
},5000);