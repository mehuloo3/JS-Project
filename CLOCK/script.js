function update()
{
let now=new Date();
let hours=now.getHours();
let minutes=now.getMinutes();
let seconds=now.getSeconds();

hours=hours<10?"0"+hours:hours;
minutes=minutes<10?"0"+minutes:minutes;
seconds=seconds<10?"0"+seconds:seconds;

const hoursElenent=document.getElementById("hours");
const minuteElement=document.getElementById("minutes");
const secondElement=document.getElementById("seconds")

hoursElenent.textContent=hours;
minuteElement.textContent=minutes;
secondElement.textContent=seconds;
}
setInterval(update,1000);