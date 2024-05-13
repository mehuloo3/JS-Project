const lowercaseL="abcdefghijklmnopqrstuvwxyz";
const uppercaseL="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersL="0123456789";
const symbolsL="~!@#$%^&*()_+=|\{}[].?/,<>-";

const lengthEl=document.getElementById("length");
const lowercaseEl=document.getElementById("lowercase");
const uppercaseEl=document.getElementById("uppercase");
const numbersEl=document.getElementById("numbers");
const symbolEl=document.getElementById("symbols");
const generateBtn=document.getElementById("generate");
const passwordEl=document.getElementById("password");

generateBtn.addEventListener("click",function()
{
let length=lengthEl.value; 
let charactor="";
let password="";

if(lowercaseEl.checked)
    {
  charactor+=lowercaseL;
    }
if(uppercaseEl.checked)
    {
  charactor+=uppercaseL;
    }
if(numbersEl.checked)
        {
      charactor+=numbersL;
        }
if(symbolEl.checked)
        {
       charactor+=symbolsL;
        }
for(let i=0;i<length;i++)
    {
        password += charactor.charAt(Math.floor(Math.random()*charactor.length));
    }
    passwordEl.value=password;
});




