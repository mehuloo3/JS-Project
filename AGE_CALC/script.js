const a=document.getElementById("dob");
const b=document.getElementById("cal");
const c=document.getElementById("result");

b.addEventListener("click",function()
{
    const dob=new Date(a.value);
    const ageInMin=Date.now()-dob.getTime();
    const ageDate=new Date(ageInMin);
    const age=Math.abs(ageDate.getUTCFullYear()-1970);
    c.innerHTML=`Your age is : ${age} years`;
})