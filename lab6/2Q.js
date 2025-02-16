const os =require('os');

const time = os.uptime();
const days = Math.floor(time/(24*3600));
const hours = Math.floor((time%(24*3600))/3600);
const minutes = Math.floor((time%3600)/60);
console.log(`Days:${days} Hours:${hours} Minutes:${minutes}`);