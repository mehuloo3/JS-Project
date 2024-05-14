function detect()
{
    const enter=document.getElementById("enter");
    const result=document.getElementById("result");
    const character =enter.value;

    if(isASCII(character))
        {
            result.innerText="the enter character is an ASCII charactor";
        }
        else 
        {
            result.innerText="the enter character is an Unicode charactor"; 
        }
}
function isASCII(character)
{
    return character.charCodeAt(0)<=127;

}